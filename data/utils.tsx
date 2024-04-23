export function getNextIndex(currentIndex:number, listLength:number) {
    if (currentIndex == listLength - 1 ) {
        return 0
    } else {
        return currentIndex + 1
    }
}

export function toPath(text:string) {
    let finalString = "/" + text.toLowerCase().replaceAll(" ", "-");
    return finalString;
  }

export function toTimespan(startDate:string, endDate:string) {
    var formattedStartDate = new Date(startDate).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });
    var formattedEndDate = new Date(endDate).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });
    return `${formattedStartDate} - ${formattedEndDate}`;
}

export function toDate(date:string) {
    var formattedDate = new Date(date).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });

    return formattedDate;
}