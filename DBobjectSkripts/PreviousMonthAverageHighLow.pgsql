SELECT keskihinta,
    yläraja,
    alaraja
FROM average_by_year_and_month
WHERE vuosi = EXTRACT(year FROM now()) AND
    kuukausi = EXTRACT(month FROM now()) -1