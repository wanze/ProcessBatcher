$(document).ready(function(){
	
	$('#batcherAction').change(function(){
		var option = $(this).find('option:selected').val();
		$('.batcherAction').closest('li.Inputfield').hide();
		$('#wrap_'+option).show().css('list-style-type', 'none');
	});
	
	$('input.toggle_all').click(function(){
		if ($(this).prop('checked')) {
			$('.toggle').prop('checked', true);
		} else {
			$('.toggle').prop('checked', false);
		}
	});
	
	//Don't enable sorting on first column - checkboxes
	if ($.tablesorter != undefined) $.tablesorter.defaults.headers = {0:{sorter:false}};
	
});