import { useDateFormat } from "@vueuse/core"

export const apiToApplication=(calendar)=>{
	return{
		id:calendar.id,
		name:calendar.name,
		date:useDateFormat(calendar.date, 'DD/MM/YYYY'),
		link:calendar.link
	}
}