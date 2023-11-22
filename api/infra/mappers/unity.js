import * as document  from './DocumentMapper'
import * as gallery from './GaleryMapper'
import * as history from './HistoryMapper'
import * as calendar from './CalendarMapper'
import * as link from './LinksMapper'
import * as papernew from './PaperNewMapper'
import * as publication from './PublicationMapper'
import * as server from './ServerMapper'
import * as slide from './SlideMapper'
import * as publication_type from './TypePublicationMapper'

export const mappers=()=>{
	const mappers={
		document,
		gallery,
		history,
		calendar,
		link,
		papernew,
		publication,
		server,
		slide,
		publication_type
	}

	function especificMapper(mapper){
		return (mappers[mapper])
	}

	return{especificMapper}
}