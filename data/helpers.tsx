export function getNextIndex(currentIndex:number, listLength:number) {
    if (currentIndex == listLength - 1 ) {
        return 0
    } else {
        return currentIndex + 1
    }
}

export function toPath(text:string) {
    let finalString = text.toLowerCase().replaceAll(" ", "-");
    return finalString;
}

export function undoPath(path:string) {
    // Remove the leading slash
    if (path.startsWith('/')) {
        path = path.substring(1);
    }
    // Replace hyphens with spaces
    let originalString = path.replaceAll("-", " ");
    // Capitalize the first word
    originalString = originalString.charAt(0).toUpperCase() + originalString.slice(1);
    // Return the resulting string
    return originalString;
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