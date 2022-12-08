const students = [
    {
        name: "Vito",
        score1: 8,
        score2: 7
    },
    {
        name: "Steve",
        score1: 8,
        score2: 6
    },
    {
        name: "Warren",
        score1: 4,
        score2: 9
    },
    {
        name: "George",
        score1: 6,
        score2: 4
    }
]

function gradeCalculation(score1,score2){
    
    let grade = (score1 + score2)/2
    return grade
    
}

for(let index of students){

let grade = gradeCalculation(index.score1,index.score2)

if(grade >= 7){
    alert(`A média do(a) aluno(a) ${index.name} é ${grade}
Parabéns, ${index.name}! Você passou!`)

}else {

    alert(`A média do(a) aluno(a) ${index.name} é ${grade}
    Não foi dessa vez, ${index.name}. Tente novamente!`)

}


}