$("#kt_datatable_licenses").DataTable({
	'processing': true,
	'serverSide': true,
	'serverMethod': 'post',
	'ajax': {
		'url': 'license-fetch.php'
	},
	'columns': [{
			data: 'key'
		},
		{
			data: 'gendate'
		},
		{
			data: 'genby'
		},
		{
			data: 'expires'
		},
		{
			data: 'note'
		},
		{
			data: 'usedon'
		},
		{
			data: 'usedby'
		},
		{
			data: 'status'
		},
		{
			data: 'actions'
		},
	],
	"language": {
		"lengthMenu": "Show _MENU_"
	},
	"dom": "<'row'" +
		"<'col-sm-6 d-flex align-items-center justify-conten-start'l>" +
		"<'col-sm-6 d-flex align-items-center justify-content-end'f>" +
		">" +

		"<'table-responsive'tr>" +

		"<'row'" +
		"<'col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start'i>" +
		"<'col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end'p>" +
		">"
});

$("#kt_datatable_reseller_licenses").DataTable({
	'processing': true,
	'serverSide': true,
	'serverMethod': 'post',
	'ajax': {
		'url': 'reseller-license-fetch.php'
	},
	'columns': [{
			data: 'key'
		},
		{
			data: 'gendate'
		},
		{
			data: 'expires'
		},
		{
			data: 'note'
		},
		{
			data: 'usedon'
		},
		{
			data: 'usedby'
		},
		{
			data: 'status'
		},
		{
			data: 'actions'
		},
	],
	"language": {
		"lengthMenu": "Show _MENU_"
	},
	"dom": "<'row'" +
		"<'col-sm-6 d-flex align-items-center justify-conten-start'l>" +
		"<'col-sm-6 d-flex align-items-center justify-content-end'f>" +
		">" +

		"<'table-responsive'tr>" +

		"<'row'" +
		"<'col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start'i>" +
		"<'col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end'p>" +
		">"
});

$("#kt_datatable_users").DataTable({
	'processing': true,
	'serverSide': true,
	'serverMethod': 'post',
	'ajax': {
		'url': 'user-fetch.php'
	},
	'columns': [{
			data: 'username'
		},
		{
			data: 'hwid'
		},
		{
			data: 'ip'
		},
		{
			data: 'createdate'
		},
		{
			data: 'lastlogin'
		},
		{
			data: 'banned'
		},
		{
			data: 'actions'
		},
	],
	"language": {
		"lengthMenu": "Show _MENU_",
	},
	"dom": "<'row'" +
		"<'col-sm-6 d-flex align-items-center justify-conten-start'l>" +
		"<'col-sm-6 d-flex align-items-center justify-content-end'f>" +
		">" +

		"<'table-responsive'tr>" +

		"<'row'" +
		"<'col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start'i>" +
		"<'col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end'p>" +
		">"
});

$("#kt_datatable_reseller_users").DataTable({
	'processing': true,
	'serverSide': true,
	'serverMethod': 'post',
	'ajax': {
		'url': 'reseller-user-fetch.php'
	},
	'columns': [{
			data: 'username'
		},
		{
			data: 'hwid'
		},
		{
			data: 'ip'
		},
		{
			data: 'createdate'
		},
		{
			data: 'lastlogin'
		},
		{
			data: 'banned'
		},
		{
			data: 'actions'
		},
	],
	"language": {
		"lengthMenu": "Show _MENU_",
	},
	"dom": "<'row'" +
		"<'col-sm-6 d-flex align-items-center justify-conten-start'l>" +
		"<'col-sm-6 d-flex align-items-center justify-content-end'f>" +
		">" +

		"<'table-responsive'tr>" +

		"<'row'" +
		"<'col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start'i>" +
		"<'col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end'p>" +
		">"
});

$("#kt_datatable_subs").DataTable({
	"order": [[1, 'asc']],
	"language": {
		"lengthMenu": "Show _MENU_",
	},
	"dom": "<'row'" +
		"<'col-sm-6 d-flex align-items-center justify-conten-start'l>" +
		"<'col-sm-6 d-flex align-items-center justify-content-end'f>" +
		">" +

		"<'table-responsive'tr>" +

		"<'row'" +
		"<'col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start'i>" +
		"<'col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end'p>" +
		">"
});

$("#kt_datatable_chats").DataTable({
	"language": {
		"lengthMenu": "Show _MENU_",
	},
	"dom": "<'row'" +
		"<'col-sm-6 d-flex align-items-center justify-conten-start'l>" +
		"<'col-sm-6 d-flex align-items-center justify-content-end'f>" +
		">" +

		"<'table-responsive'tr>" +

		"<'row'" +
		"<'col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start'i>" +
		"<'col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end'p>" +
		">"
});

$("#kt_datatable_messages").DataTable({
	"language": {
		"lengthMenu": "Show _MENU_",
	},
	"dom": "<'row'" +
		"<'col-sm-6 d-flex align-items-center justify-conten-start'l>" +
		"<'col-sm-6 d-flex align-items-center justify-content-end'f>" +
		">" +

		"<'table-responsive'tr>" +

		"<'row'" +
		"<'col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start'i>" +
		"<'col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end'p>" +
		">"
});

$("#kt_datatable_sessions").DataTable({
	'processing': true,
	'serverSide': true,
	'serverMethod': 'post',
	'ajax': {
		'url': 'session-fetch.php'
	},
	'columns': [{
			data: 'id'
		},
		{
			data: 'credential'
		},
		{
			data: 'expiry'
		},
		{
			data: 'validated'
		},
		{
			data: 'ip'
		},
		{
			data: 'actions'
		},
	],
	"language": {
		"lengthMenu": "Show _MENU_",
	},
	"dom": "<'row'" +
		"<'col-sm-6 d-flex align-items-center justify-conten-start'l>" +
		"<'col-sm-6 d-flex align-items-center justify-content-end'f>" +
		">" +

		"<'table-responsive'tr>" +

		"<'row'" +
		"<'col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start'i>" +
		"<'col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end'p>" +
		">"
});

$("#kt_datatable_webhooks").DataTable({
	"language": {
		"lengthMenu": "Show _MENU_",
	},
	"dom": "<'row'" +
		"<'col-sm-6 d-flex align-items-center justify-conten-start'l>" +
		"<'col-sm-6 d-flex align-items-center justify-content-end'f>" +
		">" +

		"<'table-responsive'tr>" +

		"<'row'" +
		"<'col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start'i>" +
		"<'col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end'p>" +
		">"
});

$("#kt_datatable_files").DataTable({
	"language": {
		"lengthMenu": "Show _MENU_",
	},
	"dom": "<'row'" +
		"<'col-sm-6 d-flex align-items-center justify-conten-start'l>" +
		"<'col-sm-6 d-flex align-items-center justify-content-end'f>" +
		">" +

		"<'table-responsive'tr>" +

		"<'row'" +
		"<'col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start'i>" +
		"<'col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end'p>" +
		">"
});

$("#kt_datatable_vars").DataTable({
	"language": {
		"lengthMenu": "Show _MENU_",
	},
	"dom": "<'row'" +
		"<'col-sm-6 d-flex align-items-center justify-conten-start'l>" +
		"<'col-sm-6 d-flex align-items-center justify-content-end'f>" +
		">" +

		"<'table-responsive'tr>" +

		"<'row'" +
		"<'col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start'i>" +
		"<'col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end'p>" +
		">"
});

$("#kt_datatable_logs").DataTable({
	'processing': true,
	'serverSide': true,
	'serverMethod': 'post',
	'ajax': {
		'url': 'log-fetch.php'
	},
	'columns': [{
			data: 'logdate'
		},
		{
			data: 'logdata'
		},
		{
			data: 'credential'
		},
		{
			data: 'pcuser'
		},
	],
	"language": {
		"lengthMenu": "Show _MENU_",
	},
	"dom": "<'row'" +
		"<'col-sm-6 d-flex align-items-center justify-conten-start'l>" +
		"<'col-sm-6 d-flex align-items-center justify-content-end'f>" +
		">" +

		"<'table-responsive'tr>" +

		"<'row'" +
		"<'col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start'i>" +
		"<'col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end'p>" +
		">"
});

$("#kt_datatable_blacklists").DataTable({
	'processing': true,
	'serverSide': true,
	'serverMethod': 'post',
	'ajax': {
		'url': 'black-fetch.php'
	},
	'columns': [{
			data: 'data'
		},
		{
			data: 'type'
		},
		{
			data: 'actions'
		},
	],
	"language": {
		"lengthMenu": "Show _MENU_",
	},
	"dom": "<'row'" +
		"<'col-sm-6 d-flex align-items-center justify-conten-start'l>" +
		"<'col-sm-6 d-flex align-items-center justify-content-end'f>" +
		">" +

		"<'table-responsive'tr>" +

		"<'row'" +
		"<'col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start'i>" +
		"<'col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end'p>" +
		">"
});

$("#kt_datatable_manageaccs").DataTable({
	"language": {
		"lengthMenu": "Show _MENU_",
	},
	"dom": "<'row'" +
		"<'col-sm-6 d-flex align-items-center justify-conten-start'l>" +
		"<'col-sm-6 d-flex align-items-center justify-content-end'f>" +
		">" +

		"<'table-responsive'tr>" +

		"<'row'" +
		"<'col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start'i>" +
		"<'col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end'p>" +
		">"
});

$("#kt_datatable_webloader").DataTable({
	"language": {
		"lengthMenu": "Show _MENU_",
	},
	"dom": "<'row'" +
		"<'col-sm-6 d-flex align-items-center justify-conten-start'l>" +
		"<'col-sm-6 d-flex align-items-center justify-content-end'f>" +
		">" +

		"<'table-responsive'tr>" +

		"<'row'" +
		"<'col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start'i>" +
		"<'col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end'p>" +
		">"
});

$("#kt_datatable_admin").DataTable({
	"language": {
		"lengthMenu": "Show _MENU_",
	},
	"dom": "<'row'" +
		"<'col-sm-6 d-flex align-items-center justify-conten-start'l>" +
		"<'col-sm-6 d-flex align-items-center justify-content-end'f>" +
		">" +

		"<'table-responsive'tr>" +

		"<'row'" +
		"<'col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start'i>" +
		"<'col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end'p>" +
		">"
});