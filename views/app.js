// .. Scope
let series_name,
	series_holder,
	add_series,
	selected,
	modal_title,
	curr_id = 0;

var app;

	// .. Define Scope 
		app = document.getElementById('app');
		series_holder = document.getElementById('series_holder');
		add_series = document.getElementById('add_series');
		selected = document.getElementById('selected');

		modal_title = document.getElementById('modal_title');

	// Add Series

	add_series.addEventListener('click', createSeries);

	function createSeries() {
		series_name = document.getElementById('series_name').value;
			if (series_name.length == 0 || series_name.length < 3) { 
				console.log('no series found'); 
				return 0;
			}else {
				curr_id++;
				// Series Structure
				let series_list = document.createElement('ul');
				series_list.className += "series";
				series_list.id = curr_id;
				let series_title = document.createElement('h1');
				series_title.id = "title";
				let series_node = document.createTextNode(series_name);
				// Appending
				series_title.appendChild(series_node);
				series_list.appendChild(series_title);
				series_holder.appendChild(series_list);
				series_list.onclick = function () {
					// Open Modal 
					selected.style.top = "200px";
					selected.style.transition = ".2s";
					selected.onclick = function () {closeModal();}
					modal_title.innerHTML = this.titleValue = series_title.innerHTML;
				}
			}
	}

	function closeModal() {
		selected.style.top = "-505px";
		selected.style.transition = ".2s";		
	}