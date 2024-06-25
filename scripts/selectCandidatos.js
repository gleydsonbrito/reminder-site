const select  = document.querySelector('.candidatos')
select.addEventListener('change', e => {
  alert(e.target.value)
})