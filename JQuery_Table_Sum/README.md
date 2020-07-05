# Get Sum of Rows and Columns in a HTML Table

##### After going through multiple scripts on the internet, here is a highly organized script to get sum of rows and columns in a HTML Table.

### Output:
<img src="https://github.com/KodingWithKunal/web-dev/blob/master/JQuery_Table_Sum/Result.gif?v=3&s=200" title="" alt="Output">

### Import:
```html
<!-- Indside <body> </body> -->
<script src="jquery-3.5.1.min.js"></script>
<script src="table_sum.js"></script>
```

### Usage:

> HTML Part:

Use `<tr class="data_row">` instead of `html<tr>` for rows that include the data (including the last row that contains column total).

To include an element in row sum:
- Use `<td data-row="[row_name]">` instead of `<td>` for every element.

To include an element in column sum: 
- Use `<td data-col="[col_name]">` instead of `<td>` for every element.

To include an element in row and column sum:
- Use `<td data-row="[row_name]" data-col="[col_name]">` instead of `<td>` for every element.

To get row total in a element:
- Use `<td data-row-tot="[row_name_tot]">` instead of `<td>`.

To get column total in a element:
- Use `<td data-col-tot="[col_name_tot]">` instead of `<td>`.

To include a row total element in column sum (used for last column element i.e. the row sum):
- Use `<td data-row-tot="[row_name_tot]" data-col="[col_name]">` instead of `<td>` for every element.
- In this case I prefer `[col_name]` to be **`row_sum`**.

To get column total of the last column (i.e. the sum of all the row sums):
- Use `<td data-col-tot="[col_name_tot]">` instead of `<td>`.
- In this case I prefer `[col_name_tot]` to be **`row_sum_tot`**.


> JS Part:
```html
<script type="text/javascript">
row_total('[row_name]', '[row_name_tot]');
col_total('[col_name]', '[col_name_tot]');
</script>
```
	
	
	