document.addEventListener('DOMContentLoaded', function() {
    const metaTag = document.querySelector('meta[name="subject"]');
    const subject = metaTag ? metaTag.getAttribute('content') : '';

    fetch('../assets/data.json')
        .then(response => response.json())
        .then(data => {
            const subjectData = data[subject];

            const lessonsList = document.getElementById('lessons-list');
            subjectData.lessons.forEach(lesson => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = lesson.link;
                a.target = '_blank';
                a.textContent = lesson.title;
                li.appendChild(a);
                lessonsList.appendChild(li);
            });

            const papersList = document.getElementById('papers-list');
            subjectData.papers.forEach(paper => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = paper.link;
                a.target = '_blank';
                a.textContent = paper.title;
                li.appendChild(a);
                papersList.appendChild(li);
            });

            const exercisesList = document.getElementById('exercises-list');
            subjectData.exercises.forEach(exercise => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = exercise.link;
                a.target = '_blank';
                a.textContent = exercise.title;
                li.appendChild(a);
                exercisesList.appendChild(li);
            });
        })
        .catch(error => console.error('Error fetching JSON:', error));
});