export const headerOptions = [
    {
        "icon": "material-symbols:featured-play-list-outline",
        "name": "Transparência",
        "action": "https://www.solonopole.ce.gov.br/acessoainformacao.php"
    },
    {
        "icon": "bi:person-fill",
        "name": "GPREV",
        "action": "https://www.solonopole.ce.gov.br/acessoainformacao.php"
    },
    {
        "icon": "ic:baseline-insert-drive-file",
        "name": "Contra-cheque",
        "action": "https://www.solonopole.ce.gov.br/acessoainformacao.php"
    }
]

export const menuConfig = {
    "level": 1,
    "items": [
        {
            "icon": "ph:house-fill",
            "name": "Início",
            "path": "/",

            id: 'home'
        },
        {
            "icon": "ic:baseline-watch-later",
            "name": "Histório",
            "path": "/history",

            id: 'history'
        },
        {
            "icon": "ph:bell-simple-fill",
            "name": "Serviços Online",

            id: 'services'
        },
        {
            "icon": "ph:phone-fill",
            "name": "Ouvidoria",
            "path": "/feedback",

            id: 'feedback'
        },
        {
            "icon": 'ph:paperclip-duotone',
            "name": 'Publicações Oficiais',
            "path": "/pub_types",

            id: 'publications'
        }
    ]
}