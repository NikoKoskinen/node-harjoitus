-- Vuoden, kuukauden ja edellisen kuukauden erottaminen
-- kuluvan ajanhetken aikaleimasta
Select EXTRACT(year FROM now()) AS vuosi,
	EXTRACT(month FROM now()) AS kuukausi,
	extract(month FROM now())-1 AS edellinen_kuukausi