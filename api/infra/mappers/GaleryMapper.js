
export const apiToApplication=(galery)=>{
	return{
		id:galery.id,
		name:galery.name,
		description:galery.description,
		photo:galery.photo
	}
}