select c.type, count(*) as quantidades
from categories c 
group by type
having count(*) = 1;

select count(*) 
from products p
where p."name" LIKE '%t-shirt';

select p."name" , p.unit_price_in_brl , c."name" , c."type" 
from products p
left join categories c on c.id = p.category_id
where c."type" = 'electronics'
order by c."type" limit 5;

select c."name", SUM(p.unit_price_in_brl)
from products p
left join categories c on c.id = p.category_id
where c."name" = 'clothing'
group by c."name";

select 
c."name" as customer,
p."name" as product,
p.unit_price_in_brl,
op.quantity  
from order_products op
left join products p on p.id = op.product_id
left join orders o on o.id = op.order_id
left join customers c on c.id = o.customer_id
;


select 
c."name" as customer,
SUM(p.unit_price_in_brl * op.quantity) as total_pedido
from order_products op
left join products p on p.id = op.product_id
left join orders o on o.id = op.order_id
left join customers c on c.id = o.customer_id
group by o.id, c."name" 
;

select p.name, max(p.unit_price_in_brl)
from products p
group by p."name", p.unit_price_in_brl 
having p.unit_price_in_brl = max(p.unit_price_in_brl)
order by p.unit_price_in_brl DESC
limit 1;

select 'house appliances' as category_name, avg(p.unit_price_in_brl) 
from products p
left join categories c on c.id = p.category_id
where c."name" = 'house appliances'











