
export const apiToApplication=(calendar)=>{
	return{
		id:calendar.id,
		name:calendar.name,
		date:calendar.date,
		link:calendar.link
	}
}