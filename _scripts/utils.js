class Utils {
    getCalloutPresets() {
        const types = ["info", "todo", "check", "error"]

        const noTypePresets = {
            indent: { indent: 1 },
            debug: { debug: true },
            foldOpen: { fold: "open" },
            foldClosed: { fold: "closed" },

            indentDebug: { indent: 1, debug: true },
            indentFoldOpen: { indent: 1, fold: "open" },
            indentFoldClosed: { indent: 1, fold: "closed" },
            debugFoldOpen: { debug: true, fold: "open" },
            debugFoldClosed: { debug: true, fold: "closed" },

            indentDebugFoldOpen: { indent: 1, debug: true, fold: "open" },
            indentDebugFoldClosed: { indent: 1, debug: true, fold: "closed" },
        }

        let presets = {}
        for (let type of types) {
            presets[type] = {}
            for (let ntp in noTypePresets) {
                presets[type][ntp] = {
                    type: type,
                    ...noTypePresets[ntp],
                }
            }
        }

        return presets
    }

    callout(options, deps) {
        if (!deps) {
            throw new Error("You forgot to add utilDeps to a callout!")
        }
        const { dv } = deps

        if (!options) {
            options = {
                type: "info",
                title: "Generic callout",
                debug: false,
                indent: 0,
                lines: [],
            }
        }
        const { type, title, debug, indent, fold, lines } = options

        let indentLine = ""
        let mark = `> [!${type}]`

        // Add indentation
        if (indent) {
            for (let i = 0; i < indent; i++) {
                indentLine += "> "
            }
            mark = indentLine + mark
        }

        // Add folding
        if (fold) {
            if (fold == "open") {
                mark = mark + "+"
            } else if (fold == "closed") {
                mark = mark + "-"
            } else {
                throw new Error(
                    `Fold option should be 'open' of 'closed', not ${options.fold}`
                )
            }
        }

        // Add extra lines
        if (lines) {
            const bodyIndentLine = `\n> ${indentLine}`
            dv.span(
                `${mark} ${title}
            > ${lines.join(bodyIndentLine)}`
            )
        } else {
            dv.span(`${mark} ${title}`)
        }
    }
}
