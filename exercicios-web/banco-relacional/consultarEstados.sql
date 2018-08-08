select * from estados

select 
    Sigla,
    nome as 'Nome do Estado'
from estados
where regiao = 'Sul'

select 
    nome,
    regiao,
    populacao
from estados
where populacao >= 10
order by populacao desc