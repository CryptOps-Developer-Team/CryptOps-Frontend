export function getDate(date){
	return new Date(date).toLocaleDateString('tr-TR', {
			day: 'numeric',
			month: 'short',
			year: 'numeric',
		});
}