
export const apiToApplication=(publication)=>{
	return{
		id:publication.id,
		category:publication.category,
		type_publication:publication.publication_type
	}
}
