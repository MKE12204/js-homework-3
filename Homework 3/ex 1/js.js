/*1) Дані два масиви: ['a', 'b', 'c'] та [1, 2, 3]. Об'єднайте їх разом */
let a = ['a', 'b', 'c'];
let b = [1, 2, 3];
let comb = a.concat(b); 
document.write(comb);   
/*2) Дан масив ['a', 'b', 'c']. Додайте йому до кінця елементи 1, 2, 3. */
let d = ['a', 'b', 'c'];
let v = d.push(1, 2, 3)
document.write('<br></br>');
document.write(d)
/* 3 Дан масив [1, 2, 3]. Зробіть із нього масив [3, 2, 1]. */
let arr = [1,2,3];
let s = arr.reverse( );
document.write('<br></br>');
document.write(arr);
/*4 Дан масив [1, 2, 3]. Додайте йому до кінця елементи 4, 5, 6. */
let f = [1, 2, 3 ];
let fa = f.splice(3, 0, 4, 5, 6);
document.write('<br></br>');
document.write(f);
/*5 Дан масив [1, 2, 3]. Додайте йому на початок елементи 4, 5, 6. */
let g = [1, 2, 3];
let ga = g.splice(0, 0, 4, 5, 6 );
document.write('<br></br>');
document.write(g);
/*6 Дан масив ['js', 'css', 'jq']. Виведіть перший елемент на екран. */
let l = ['js', 'css', 'jq'];
let js = 1;
document.write('<br></br>');
document.write(l[0]);
/* Дан масив [1, 2, 3, 4, 5]. За допомогою методу slice запишіть нові елементи [1, 2, 3]. */
let x = [1, 2, 3, 4, 5];
let xa = x.slice(0, 3);
document.write('<br></br>');
document.write(xa);
/* Дан масив [1, 2, 3, 4, 5]. За допомогою методу splice перетворіть масив на [1, 4, 5]. */
 let r = [1, 2, 3, 4, 5];
let ra = r.splice(1, 2);
document.write('<br></br>');
document.write(r); 
/* Дан масив [1, 2, 3, 4, 5]. За допомогою методу splice перетворіть масив на [1, 2, 10, 3, 4, 5]. */
let t = [1, 2, 3, 4, 5];
let ta = t.splice(2, 0, 10);
document.write('<br></br>');
document.write(t);
/* Дан масив [3, 4, 1, 2, 7]. Відсортуйте його. */
let i = [3, 4, 1, 2, 7];
i.sort();
document.write('<br></br>');
document.write(i);
/* Дан масив з елементами 'Привіт, ', 'світ' і '!'. Потрібно вивести на екран фразу 'Привіт, мир!'. */
let w = ['Привіт, ', 'світ', '!'];
w.splice(1, 2, 'мир!');
document.write('<br></br>');
document.write(w.join(' '));
/* Дан масив ['Привіт, ', 'світ', '!']. Необхідно записати в нульовий елемент цього масиву слово 'Поки, ' (тобто замість слова 'Привіт, ' буде 'Поки, '). */
let z = ['Привіт, ', 'світ', '!'];
z.shift();
z.unshift('Поки');
document.write('<br></br>');
document.write(z.join(' '));
/* Створіть масив arr з елементами 1, 2, 3, 4, 5 двома різними способами. */
let ar = [1, 2, 3, 4, 5];
let gf = new Array(1,2,3,4,5);
/* Створіть масив arr = ['a', 'b', 'c', 'd'] і за допомогою його виведіть на екран рядок 'a+b, c+d'. */
let qa = ['a', 'b', 'c', 'd'];
let qa1 = qa.slice(0, 2).join('+'); 
let qa2 = qa.slice(2).join('+');    
let result = qa1 + ', ' + qa2; 
document.write('<br></br>');
document.write(result);
/* Запитайте у користувача кількість елементів масиву. Виходячи з даних, які ввів користувач створіть масив на ту кількість елементів, яку передав користувач. у кожному індексі масиву зберігайте чило який показуватиме номер елемента масиву. 
*/
let dss = parseInt(prompt('Введите количество элементов массива'), );
let ds = [];
if (dss > 0) {
    for (let i = 1; i <= dss; i++) {
        ds.push(i);
    }
}
document.write('<br></br>');
document.write(ds);
/* Зробіть так, щоб з масиву, який ви створили вище, вивелися всі непарні числа в параграфі, а парні в спані з червоним тлом.  */
document.write('<br></br>');
document.write('Не смог выполнить')

/* Напишіть код, який перетворює та об'єднує всі елементи масиву в одне рядкове значення. Елементи масиву будуть розділені комою. */
               
let  vegetables = ['Капуста', 'Ріпа', 'Редиска', 'Морковка'];
 let str1 = vegetables.toString()   
document.write('<br></br>');
document.write(str1);