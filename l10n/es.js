OC.L10N.register(
    "news",
    {
    "Request failed, network connection unavailable!" : "La petición ha fallado, conexión de red no disponible.",
    "Request unauthorized. Are you logged in?" : "Petición no autorizada, ¿te has identificado?",
    "Request forbidden. Are you an admin?" : "Petición prohibida. ¿Eres el administrador?",
    "Token expired or app not enabled! Reload the page!" : "¡Sesión caducada o aplicación no habilitada! ¡Vuelve a cargar la página!",
    "Internal server error! Please check your data/nextcloud.log file for additional information!" : "¡Error interno del servidor! ¡Por favor, comprueba el archivo data/nextcloud.log para mas información!",
    "Request failed, Nextcloud is in currently in maintenance mode!" : "¡Petición fallida! Nexcloud está actualmente en modo mantenimiento.",
    "News" : "Noticias",
    "An RSS/Atom feed reader" : "Un lector de feeds RSS/Atom",
    "The News app is an RSS/Atom feed reader for Nextcloud which can be synced with many mobile devices. A list of all clients and requirements can be found [in the README](https://github.com/nextcloud/news)\n\nBefore you update to a new version, [check the changelog](https://github.com/nextcloud/news/blob/master/CHANGELOG.md) to avoid surprises.\n\n**Important**: To enable feed updates you will need to enable either [Nextcloud system cron](https://docs.nextcloud.org/server/latest/admin_manual/configuration_server/background_jobs_configuration.html#cron) or use [an updater](https://github.com/nextcloud/news-updater) which uses the built in update API and disable cron updates. More information can be found [in the README](https://github.com/nextcloud/news)." : "Noticias es un lector de fuentes RSS/Atom para Nextcloud que se puede sincronizar con muchos dispositivos móviles. Se puede encontrar una lista de todos los clientes y requisitos [en el LÉEME](https:://github.com/nextcloud/news).\n\nAntes de actualizar a una nueva versión, [comprueba la lista de cambios](https://github.com/nextcloud/new/blob/master/CHANGELOG.md) para evitar sorpresas.\n\n**Importante**: para activar la actualización de las fuentes, tienes que activar o bien el [cron del sistema de Nextcloud](https://docs.nextcloud.org/server/latest/admin_manual/configuration_server/background_jobs_configuration.html#cron) o usar [un actualizador](https://github.com/nextcloud/news-updater) que usar la API de actualización incorporada y desactiva las actualizaciones vía cron. Se puede encontrar más información [en el LÉEME](https://github.com/nextcloud/news).",
    "Use system cron for updates" : "Usa el cron del sistema para las actualizaciones",
    "Disable this if you run a custom updater such as the Python updater included in the app." : "Desactiva esto si ejecutas un actualizador personalizado, como el actualizador Python incluido en la app.",
    "Purge interval" : "Intervalo de purga",
    "Minimum amount of seconds after deleted feeds and folders are removed from the database; values below 60 seconds are ignored." : "Cantidad de segundos mínima antes de que las fuentes y carpetas borradas se eliminen de la base de datos; los valores por debajo de 60 segundos son ignorados.",
    "Maximum read count per feed" : "Máximo número de lecturas por fuente",
    "Defines the maximum amount of articles that can be read per feed which won't be deleted by the cleanup job; if old articles reappear after being read, increase this value; negative values such as -1 will turn this feature off." : "Define la cantidad de artículos máxima que se pueden leer por fuente que no se borrarán mediante el trabajo de limpieza, si reaparecen artículos viejos después de que los hayas leído, aumenta este valor, valores negativos como -1 desactivarán esta característica.",
    "Maximum redirects" : "Máximo de redirecciones",
    "How many redirects the feed fetcher should follow." : "Cuántas redirecciones debería seguir el capturador de fuentes.",
    "Feed fetcher timeout" : "Tiempo de espera agotado para la descarga de la fuente",
    "Maximum number of seconds to wait for an RSS or Atom feed to load; if it takes longer the update will be aborted." : "Número máximo de segundos que esperara a que una fuente RSS o Atom cargue; si tarda más se abortará la actualización.",
    "Explore Service URL" : "Explorar URL del Servicio",
    "If given, this service's URL will be queried for displaying the feeds in the explore feed section. To fall back to the built in explore service, leave this input empty." : "Si se da, esta URL del servicio se usará para mostrar las fuentes en la sección de explorar fuentes. Para volver al servicio de exploración incorporado, deja este campo vacío.",
    "For more information check the wiki." : "Para más información, comprueba la wiki.",
    "Update interval" : "Intervalo de actualización",
    "Interval in seconds in which the feeds will be updated." : "Intervalo en segundos en el que se actualizarán las fuentes.",
    "Saved" : "Guardado",
    "Download" : "Descargar",
    "Close" : "Cerrar",
    "Subscribe to" : "Subscribirse a",
    "No articles available" : "No hay artículos disponibles",
    "No unread articles available" : "No hay artículos leídos disponibles",
    "Open website" : "Abrir página web",
    "Star article" : "Añadir artículo a favoritos",
    "Unstar article" : "Quitar artículo de favoritos",
    "Keep article unread" : "Mantener el artículo como no-leído.",
    "Remove keep article unread" : "Elimina mantener el artículo como no-leído.",
    "Username" : "Nombre de usuario",
    "by" : "por",
    "from" : "de",
    "Play audio" : "Reproducir audio",
    "Download audio" : "Descargar audio",
    "Download video" : "Descargar vídeo",
    "Keyboard shortcut" : "Atajo de teclado",
    "Description" : "Descripción",
    "right" : "derecha",
    "Jump to next article" : "Ir al artículo siguiente",
    "left" : "izquierda",
    "Jump to previous article" : "Ir al artículo anterior",
    "Toggle star article" : "Marcar como favorito",
    "Star article and jump to next one" : "Marcar como favorito e ir al siguiente",
    "Toggle keep current article unread" : "Marcar como no leído",
    "Open article in new tab" : "Abrir artículo en una nueva pestaña",
    "Toggle expand article in compact view" : "Expandir artículo en vista compacta",
    "Refresh" : "Actualizar",
    "Load next feed" : "Cargar fuente siguiente",
    "Load previous feed" : "Cargar fuente anterior",
    "Load next folder" : "Cargar carpeta siguiente",
    "Load previous folder" : "Cargar carpeta anterior",
    "Scroll to active navigation entry" : "Desplácese hasta la entrada de navegación activa",
    "Focus search field" : "Poner el cursor en el campo de búsqueda",
    "Mark current article's feed/folder read" : "Marcar los articulos actuales de la fuente/carpeta como leídos",
    "Ajax or webcron mode detected! Your feeds will not be updated!" : "¡Detectado modo Ajax o webcron! ¡Tus fuentes no se actualizarán!",
    "How to set up the operating system cron" : "Cómo configurar el cron del sistema operativo",
    "Install and set up a faster parallel updater that uses the News app's update API" : "Instala y configura un actualizador paralelo más rápido que utiliza la API de actualización de la app News",
    "Subscribe" : "Suscribirse",
    "Web address" : "Dirección web",
    "Feed exists already!" : "Esa fuente ya existe.",
    "Folder" : "Carpeta",
    "No folder" : "Sin carpeta",
    "New folder" : "Nueva carpeta",
    "Folder name" : "Nombre de la carpeta",
    "Go back" : "Atrás",
    "Folder exists already!" : "¡La carpeta ya existe!",
    "Credentials" : "Credenciales",
    "HTTP Basic Auth credentials must be stored unencrypted! Everyone with access to the server or database will be able to access them!" : "¡Las credenciales para HTTP Basic Auth deben estar guardadas sin cifrar! ¡Pero cualquiera con acceso al servidor podría acceder a ellas!",
    "Password" : "Contraseña",
    "New Folder" : "Nueva carpeta",
    "Create" : "Crear",
    "Explore" : "Explorar",
    "Update failed more than 50 times" : "La actualización ha fallado más de 50 veces",
    "Deleted feed" : "Eliminar fuente",
    "Undo delete feed" : "Deshacer eliminar fuente",
    "Rename" : "Renombrar",
    "Menu" : "Menú",
    "Mark read" : "Marcar como leído",
    "Unpin from top" : "Soltar de arriba",
    "Pin to top" : "Fijar arriba",
    "Newest first" : "Más nuevos primero",
    "Oldest first" : "Más viejos primero",
    "Default order" : "Orden por defecto",
    "Enable full text" : "Habilitar texto completo",
    "Disable full text" : "Deshabilitar texto completo",
    "Unread updated" : "Artículos sin leer actualizados",
    "Ignore updated" : "Ignorar los actualizados",
    "Open feed URL" : "Abrir URL de la fuente",
    "Delete" : "Eliminar",
    "Dismiss" : "Descartar",
    "Collapse" : "Colapsar",
    "Deleted folder" : "Carpeta eliminada",
    "Undo delete folder" : "Deshacer eliminar carpeta",
    "Starred" : "Favoritos",
    "Unread articles" : "Artículos sin leer",
    "All articles" : "Todos los artículos",
    "Settings" : "Ajustes",
    "Disable mark read through scrolling" : "Deshabilitar marca de lectura mientras se desplaza",
    "Compact view" : "Vista compacta",
    "Expand articles on key navigation" : "Expandir los artículos al navegar con teclas",
    "Show all articles" : "Mostrar todos los artículos",
    "Reverse ordering (oldest on top)" : "Ordenación inversa (la más antigua en la parte superior)",
    "Subscriptions (OPML)" : "Suscripciones (OPML)",
    "Import" : "Importar",
    "Export" : "Exportar",
    "Error when importing: File does not contain valid OPML" : "Error al importar: el archivo no contiene un OPML válido",
    "Error when importing: OPML is does neither contain feeds nor folders" : "Error al importar: el OPML no contiene fuentes ni carpetas",
    "Unread/Starred Articles" : "Artículos no leídos y favoritos",
    "Error when importing: file does not contain valid JSON" : "Error al importar: el archivo no contiene JSON válido",
    "Help" : "Ayuda",
    "Keyboard shortcuts" : "Atajos de teclado",
    "Documentation" : "Documentación",
    "Report a bug" : "Notificar un error"
},
"nplurals=2; plural=(n != 1);");
