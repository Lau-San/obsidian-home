<%*
const files = app.vault.getMarkdownFiles()
let people = []
for (let f of files) {
	if (f.path.startsWith('People')) {
		people.push(f.basename)
	}
}

const w = await tp.system.suggester(people)
%>

<% w %>