Сделал: 3, 4, 5
w, s - громкость
a, d - дорожка
space - пауза/возспроизведение 

https://spectacular-dentist-695.notion.site/frontend-05c190d05d644264afb29463a52f73e1

<aside>
⚠️ **Срок выполнения:** одна неделя с момента выдачи задания.

Готовый результат обязательно выложить на [**GitHub Pages](https://pages.github.com/), [Vercel: Develop](https://vercel.com/)** или **[Heroku](https://www.heroku.com/).**

</aside>

## 👀 ****Базовое задание****

Необходимо реализовать страницу с формой для ввода ссылки на аудиофайл. После успешного ввода, вместо формы должен отобразиться плеер в котором можно прослушать источник.

---

## 💭 ****Подробное описание и сценарий работы:****

****Страница****

Сама страница представляет собой обычную *html* страницу с *css* стилями. Ее нужно реализовать без использования *React*. Она должна корректно отображаться, даже если выполнение *js* на странице запрещено.

В разделе “*Technical requirements*” реализовать переключение вкладок (табов) по клику на них. Если выполнение *js* запрещено, то должна быть активна первая вкладка.

****Форма и плеер****

Форма ввода ссылки и плеер должны быть выполнены с помощью *React*.

В форме располагается поле ввода ссылки в формате “*https://*”. При некорректном вводе ссылки нужно отобразить ошибку, как указано на макете.

При успешном вводе, скрывать форму и в этом же месте отобразить плеер с источником аудио из ссылки.

При буферизации аудио потока отображать лоадер в виде бегущей линии. Пример анимации можно увидеть в прототипе компонента.

Сам плеер должен быть реализован с помощью браузерного тега *<audio/>*. Важно отобразить прогресс в секундах, регулятор громкости и добавить возможность изменения прогресса воспроизведения.

По клику на кнопку “*Back*”, пользователь должен вернуться к форме ввода ссылки

Ограничений на использование сторонних библиотек, выбор стэйт менеджеров, css препроцессоров и сборщика не накладывается. Результат необходимо сохранить в свой открытый репозиторий на github.

    ****Ссылка на макет:****

https://www.figma.com/file/a5GiybFrpqEbalfx6RjND4/Open-Media-Frontend-test-task?t=GgxilvZhiL98zVjE-0

****Пример прямых ссылок для плеера:****

Audio

https://ts01.flac.pw/mp3/13085.mp3

https://ts01.flac.pw/mp3/11573.mp3

https://d.lalal.ai/media/split/ebf6a7a0-2d14-4761-a898-3fc2100fd6a8/bcd093a8-7cf1-4178-a7b1-9a9d00a5625e/no_vocals

https://s3-us-west-2.amazonaws.com/s.cdpn.io/858/outfoxing.mp3

https://c5.radioboss.fm:18084/stream

Video

https://ia800300.us.archive.org/17/items/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4

https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm

# 🛫 ****Дополнительные задания (опционально):****

1. Реализовать плеер с использованием Web Audio API.
2. Добавить поддержку проигрывания видео (так же по источнику).
3. Реализовать отображение истории запросов (введённых источников).
4. Добавить управление плеером с помощью клавиатуры. Просьба указать в описании проекта используемые шорткаты.
5. Реализовать всплывающие уведомления, в которых можно вывести возникшие ошибки и предупреждения.
6. Добавить генерацию waveform.
7. Реализовать изменение скорости воспроизведения дорожки и ползунок со стерео панорамой.
8. Добавить второй плеер с возможностью воспроизведения источника. При этом, форма ввода одна. Изначально источник воспроизводится в первом плеере, но при клике может воспроизводиться во втором. В один момент времени звук должен исходить только из одного плеера, другой должен ставиться на паузу.

Все дополнительные задания отображены на макетах отдельными блоками.

<aside>
📌 Количество и варианты дополнительных заданий вы выбираете сами.

Как пример, можно взять 1 и 6. Или 4, 5 и 8. Всё на Ваше усмотрение.

</aside>

<aside>
⚠️ Важно понимать, что дополнительные задания - это задания для творчества. При проверке задания, нам важно видеть качество выполнения, а не количество сделанных пунктов.

</aside>

---