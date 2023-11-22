import { useDateFormat } from '@vueuse/core'

export const apiToApplication=(papernew)=>{
	return{
		id:papernew.id,
		name:papernew.name,
		description:papernew.description,
		type:papernew.type,
		image:papernew.image,
		created_at: useDateFormat(papernew.created_at, 'DD/MM/YYYY')
	}
}