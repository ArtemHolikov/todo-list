export const getMonth = () => {
    const date = new Date();
    let month;
    
    switch (date.getMonth() + 1) {
        case 1: {
            month = `${date.getDate()}, January`;
            break;
        }
        case 2: {
            month = `${date.getDate()}, February`;
            break;
        }
        case 3: {
            month =  `${date.getDate()}, March`;
            break;
        }
        case 4: {
            month =  `${date.getDate()}, April`;
            break;
        }
        case 5: {
            month =  `${date.getDate()}, May`;
            break;
        }
        case 6: {
            month =  `${date.getDate()}, June`;
            break;
        }
        case 7: {
            month =  `${date.getDate()}, July`;
            break;
        }
        case 8: {
            month =  `${date.getDate()}, August`;
            break;
        }
        case 9: {
            month =  `${date.getDate()}, September`;
            break;
        }
        case 10: {
            month =  `${date.getDate()}, October`;
            break;
        }
        case 11: {
            month =  `${date.getDate()}, November`;
            break;
        }
        case 12: {
            month =  `${date.getDate()}, December`;
            break;
        }
    }
    return month;
}

