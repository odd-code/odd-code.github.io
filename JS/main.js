function load(page, element) {
	$("#sidebar-wrapper .selected-link").each(function(k, v) { $(v).toggleClass("selected-link") });
	$(element).parent().toggleClass("selected-link");
	$("#page-content-wrapper").load(page + " #container");
}