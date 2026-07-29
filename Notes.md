📝 ملخص اليوم الأول (ورقة واحدة)
1. React
React هي JavaScript Library لبناء واجهات المستخدم (UI).
React Declarative وليس Imperative.
React بيعتمد على Components.
2. Component
عبارة عن Function.
أول حرف لازم يكون Capital.
بيرجع JSX.
قابل لإعادة الاستخدام (Reusable).

مثال:

function App() {
  return <h1>Hello</h1>;
}
3. JSX
شكله شبه HTML.
لكنه مش HTML.
بيتحول إلى JavaScript بواسطة Babel.
4. Babel
مترجم.
يحول JSX إلى JavaScript يفهمها المتصفح.
5. Virtual DOM
نسخة افتراضية من الـ DOM.
React بيعمل منها نسخة جديدة عند كل Render.
يقارن القديمة بالجديدة.
6. Reconciliation

عملية مقارنة:

Old Virtual DOM

مع

New Virtual DOM

7. Diffing Algorithm

تحدد:

إيه اتغير.
إيه اتمسح.
إيه اتضاف.
8. Real DOM

React يحدث الجزء اللي اتغير فقط.

مش الصفحة كلها.

9. Rendering

Render = تنفيذ الـ Component وإرجاع JSX.

10. React Elements

الناتج من الـ JSX بعد تحويله.

11. Key

لازم تكون:

Unique
Stable
Consistent

ومتستخدمش index إلا لو الليستة ثابتة.

12. Project Structure
src/
components/
assets/

App.jsx
main.jsx
13. main.jsx

هو Entry Point.

هو أول ملف React يشتغل.

14. App.jsx

أول Component بيتعرض.

15. ReactDOM

هو اللي يربط React بالمتصفح.

16. Props

بيانات تنتقل من:

Parent

↓

Child

وتعتبر Read Only.

17. Destructuring

بدل:

props.name

نكتب:

{name}
18. Default Values
function User({name="Unknown"})
19. Children

أي حاجة بين:

<Component>

هنا

</Component>

بتوصل في Prop اسمها:

children
20. StrictMode
للتطوير فقط.
يساعد في اكتشاف الأخطاء.
لا يؤثر على Production.

What's the difference between PUT and PATCH?

تقول:

PUT updates the entire resource, while PATCH updates only specific fields of the resource.