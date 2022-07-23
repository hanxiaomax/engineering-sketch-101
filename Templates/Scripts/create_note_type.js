async function create_note_type(tp) { 
	var title;
	title = tp.file.title
	types = ["MOC","topic"]
	const type = await tp.system.suggester(types,types) 

	return `---
tag:
- ${type} 
--- 
---
`
} 
module.exports = create_note_type
