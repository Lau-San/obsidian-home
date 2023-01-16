---
obsidianEditingMode: live
obsidianUIMode: preview
---
%%
date:: [[2022-11-18]]
%%

> [!info]- Metadata
> **Tags**:: #TOC #resources
> **Parents**:: [[Brain Hub]]

# Resources

## Waiting for processing

```dataviewjs
const isProcessMe = page => {
	if (page['Tags']) {
		return page['Tags'].includes('process-me')
	}
	return false
}

const resources = dv.pages('#resources')
	.where(b => isProcessMe(b))
	.where(b => !b.file.path.includes('templates'))
	.sort(b => b.file.mtime, 'desc')

dv.table(
	['Resource', 'Type'],
	resources.map(b => [b.file.link, b.Type])
)
```

## Latest resources

```dataviewjs
const isTOC = page => {
	if (page['Tags']) {
		return page['Tags'].includes('TOC')
	}
	return false
}

const resources = dv.pages('#resources')
	.where(b => !isTOC(b))
	.where(b => !b.file.path.includes('templates'))
	.sort(b => b.file.mtime, 'desc')
	.limit(5)

dv.table(
	['Resource', 'Last Modified', 'Type'],
	resources.map(b => [b.file.link, b.file.mday, b.type])
)
```

## All Resources

```dataviewjs
const isTOC = page => {
	if (page['Tags']) {
		return page['Tags'].includes('TOC')
	}
	return false
}

const allResources = dv.pages('#resources')
	.where(b => !isTOC(b))
	.where(b => !b.file.path.includes('templates'))

const types = allResources['Type'].distinct()

for (let type of types) {
	const resources = allResources.where(b => b['Type'] == type)
		  
	const header = type[0].toUpperCase() + type.slice(1) + 's'
	dv.header(3, header)
	dv.table(
		['Table', 'Source', 'Author'],
		resources.map(b => [b.file.link, b.source, b.author])
	)
}
```