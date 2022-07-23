async function create_code_example(tp) { 
	var title;
	title = tp.file.title
	types = ["bash","c","ts","python"]
	const type = await tp.system.suggester(types,types) 
	return `###### > code example ⤵️
\`\`\`${type}

\`\`\`
######`
} 

module.exports = create_code_example
