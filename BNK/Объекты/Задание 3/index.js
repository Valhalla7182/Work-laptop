function handleObject(obj, key, action) {
    if (action === 'get') {
        return obj;
    } else if (action === 'add') {
        const objCopy = obj;
        objCopy[key] = '';
        return objCopy;
    }else if(action === 'delete') {
        const objCopy = obj;
        delete objCopy[key];
        return obj;
    }else {
        return obj;
    }
}

const student = {
    name: 'Maxim',
    programmingLanguage: 'JavaScript',
 }
  
 const result = handleObject(student, 'programmingLanguage', 'get');
 console.log('result', result); // { name: 'Maxim' }