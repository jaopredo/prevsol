
export const apiToApplication=(slide)=>{
	return{
		id:slide.id,
		name:slide.name,
		description:slide.description,
		url:slide.url,
		image:slide.image
	}
}