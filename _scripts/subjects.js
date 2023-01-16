class Subjects {
    getSubjects(deps) {
        const { dv } = deps
        const curr = dv.current()

        if (!dv) {
            throw new Error("No dv was given")
        }

        const allSubjects = dv.pages('"Studies/Subjects"')

        const careerSubjects = allSubjects.where((b) => {
            if (!b.career) {
                return false
            }

            if (dv.isArray(b.career)) {
                // Get career names from career links
                const careerNames = b.career.map((c) => {
                    return dv.page(c.path).file.name
                })

                const shouldInclude = careerNames.includes(curr.file.name)

                return shouldInclude
            } else {
                // Get career name from career link
                const careerName = dv.page(b.career.path).file.name

                const shouldInclude = careerName == curr.file.name

                return shouldInclude
            }
        })

        return careerSubjects
    }

    getReadySubjects(deps) {
        const subjects = this.getSubjects(deps)
        const readySubjects = subjects
            .where((b) => {
                return !this.isBlocked(b, deps)
            })
            .where((b) => b.status == "pending")
        return readySubjects
    }

    getPendingSubjects(deps) {
        const subjects = this.getSubjects(deps)
        const pendingSubjects = subjects.where((b) => b.status == "pending")
        return pendingSubjects
    }

    getInProgressSubjects(deps) {
        const subjects = this.getSubjects(deps)
        const inProgressSubjects = subjects.where(
            (b) => b.status == "in progress"
        )
        return inProgressSubjects
    }

    getCompletedSubjects(deps) {
        const subjects = this.getSubjects(deps)
        const completedSubjects = subjects.where((b) => b.status == "completed")
        return completedSubjects
    }

    getBlockedSubjects(deps) {
        const subjects = this.getSubjects(deps)

        const blockedSubjects = subjects.where((b) => {
            const isBlocked = this.isBlocked(b, deps)
            return isBlocked
        })

        return blockedSubjects
    }

    isBlocked(page, deps) {
        const { dv } = deps

        const subjectDeps = page.dependencies
        if (!subjectDeps) {
            return false
        }

        let depsStatus = []
        for (let depId of subjectDeps) {
            let depPage = dv.pages().where((b) => b.id == depId)[0]
            depsStatus.push(depPage.status)
        }

        return depsStatus.some((s) => s != "completed")
    }
}
