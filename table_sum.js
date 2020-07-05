function row_total(in_id, out_id){
	$('tr.data_row').each(function() {
		var tot_row = 0;
		$(this).find('[data-row="'+in_id+'"]').each(function() {
			var cell_value=$(this).text();
			if (cell_value.length!=0) {
				tot_row+=parseFloat(cell_value);
			}
		});
		$(this).find('[data-row-tot="'+out_id+'"]').html(tot_row);
		$(this).find('[data-row-tot="'+out_id+'"]').css("font-weight","bold");
	});
}

function col_total(in_data, out_data){
	var tot_col = 0;
	$('tr.data_row').each(function() {
		$(this).find('[data-col="'+in_data+'"]').each(function() {
			var cell_value=$(this).text();
			if (cell_value.length!=0) {
				tot_col+=parseFloat(cell_value);
			}
		});
	});
	console.log(tot_col);
	$('[data-col-tot="'+out_data+'"]').html(tot_col);
	$('[data-col-tot="'+out_data+'"]').css("font-weight","bold");
}