const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб'];

function giveParcel() {
    alert(`${peopleWaiting[0]} получил(а) посылку, В очереди осталось ${peopleWaiting.length} человек.`)
    peopleWaiting.shift();
}
giveParcel();
giveParcel();

alert(`Уже обед! Мы сможем обсужить только ${peopleWaiting[0]}!`)
giveParcel();

function leaveQueueWithoutParcel() {
    alert(`${peopleWaiting[peopleWaiting.length - 1]} не получил(a) посылку, и ушел(ла) из очереди`)
    peopleWaiting.pop();
}

leaveQueueWithoutParcel();
leaveQueueWithoutParcel();
leaveQueueWithoutParcel();
leaveQueueWithoutParcel();