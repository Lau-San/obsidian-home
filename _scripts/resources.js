class Resources {
    /**
     * Get all resources in the current cubject.
     */
    getResources(deps) {
        if (!deps) {
            throw new Error("No deps object was passed to get resources")
        }

        const { dv } = deps

        if (!dv) {
            throw new Error("No dv was found in deps")
        }

        const curr = dv.current()

        const allResources = dv.pages('"Resources"')
        const subjectResources = allResources.where((b) => {
            const studySubject = b["study-subject"]
            if (!studySubject) {
                return false
            }
            if (dv.isArray(studySubject)) {
                const subjectNames = studySubject.map((s) => {
                    return dv.page(s.path).file.name
                })
                return subjectNames.includes(curr.file.name)
            } else {
                const subjectName = dv.page(studySubject.path).file.name
                return subjectName == curr.file.name
            }
        })

        return subjectResources
    }

    /**
     * Retrieve all levels associated to resources in the current subject.
     * Optionally, filter them by topic.
     */
    getLevels(deps, topic) {
        const { dv } = deps
        let resources = this.getResources(deps)

        if (topic == "General") {
            resources = resources.where((b) => !b.topic)
        } else if (topic) {
            resources = resources.where((b) => b.topic == topic)
        }

        const levels = resources.level.distinct().sort((l) => {
            if (l == "Basic") {
                return 1
            } else if (l == "Intermediate") {
                return 50
            } else if (l == "Advanced") {
                return 100
            } else {
                return 1000000
            }
        })

        return levels
    }
}
