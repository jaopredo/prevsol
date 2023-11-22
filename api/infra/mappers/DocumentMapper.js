
export const apiToApplication=(doc)=>{
	return{
		id:doc.id,
		name:doc.name,
		description:doc.description,
		keywords:doc.keywords,
		publication_id:doc.publication.id,
		publication:doc.publication,
		archive:doc.archive
	}
}