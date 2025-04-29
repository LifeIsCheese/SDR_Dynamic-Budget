function bdeath () {
    dendryUI.dendryEngine.state.qualities.bruning_plot = "successful";
 }

function bfail () {
    dendryUI.dendryEngine.state.qualities.bruning_plot = "failed";
 }
function bfifty () {
    dendryUI.dendryEngine.state.qualities.bruning_plot = 50;
 }
function bhundred () {
    dendryUI.dendryEngine.state.qualities.bruning_plot = 100;
 }

 function hdeath () {
    dendryUI.dendryEngine.state.qualities.hjalmar_plot = "successful";
 }

function hfail () {
    dendryUI.dendryEngine.state.qualities.hjalmar_plot = "failed";
 }
function hfifty () {
    dendryUI.dendryEngine.state.qualities.hjalmar_plot = 50;
 }
function hhundred () {
    dendryUI.dendryEngine.state.qualities.hjalmar_plot = 100;
 }
 function new_hire () {
   dendryUI.dendryEngine.state.qualities.director_pointer = Math.floor( Math.random() * 7);
   dendryUI.dendryEngine.state.qualities.director_type = 1;
   dendryUI.dendryEngine.state.qualities.director_s = dendryUI.dendryEngine.state.qualities.director_a[dendryUI.dendryEngine.state.qualities.director_pointer];
}