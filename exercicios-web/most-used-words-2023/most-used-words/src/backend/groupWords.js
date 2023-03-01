module.exports = (words) => {
    //[A,A,B,B,A,C,E,D]
    // {A:3, B:2, C:1, D:1, E:1}
    return new Promise((resolve, reject) => {
        try {
            const groupedWords = words.reduce((obj, word) => {
                if (obj[word]) {
                    obj[word] = obj[word] + 1;
                } else {
                    obj[word] = 1;
                }
                return obj;
            }, {});

            const groupedWordsArray = Object.keys(groupedWords)
                .map((key) => ({ word: key, amount: groupedWords[key] }))
                .sort((w1, w2) => w2.amount - w1.amount);
            resolve(groupedWordsArray);
        } catch (e) {
            reject(e);
        }
    });
};
