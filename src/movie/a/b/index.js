import $ from 'jquery'
import url from '@/1.png'

export default function(){
  $('<img>').prop('src', url).appendTo(document.body);
}