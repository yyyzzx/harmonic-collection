
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropdown')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

document.write(
  "<div class='h1-container'> <div class='h1-1'><h1>Habit</h1></div> <div class='h1-2'><h1>Development</h1></div> <div class='h1-3'><h1>Logs</h1></div> </div>"
)

document.write(
  "<table> <tr> <td><a href='https://yyyzzx.github.io/harmonic-collection/'>Homepage</a></td> <td><a href='https://www.easp.eu/publications/ejsp/'>European Journal of Social Phychology</a></td> <td><a href='https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.695.830&rep=rep1&type=pdf'>How are habits formed: habit formation in the real world</a></td> </tr> </table>"
)

document.write(
  "<table> <tr> <td><a href='https://yyyzzx.github.io/harmonic-collection/entry-1/'>Entry 1: Water Intake</a></td> <td><a href='https://www.gigacalculator.com'>GIGA Calculator</a></td> <td><a href='https://www.gigacalculator.com/calculators/water-intake-calculator.php'>Daily Water Intake Calculator</a></td> </tr> </table>"
)

document.write(
  "<table> <tr> <td><a href='https://yyyzzx.github.io/harmonic-collection/entry-2/'>Entry 2: Sleep Duration</a></td> <td><a href='https://www.cdc.gov'>Centers for Disease Control and Prevention</a></td> <td><a href='https://www.cdc.gov/sleep/about_sleep/how_much_sleep.html'>Basics About Sleep</a></td> </tr> </table>"
)

document.write(
  "<table> <tr> <td><a href='https://yyyzzx.github.io/harmonic-collection/entry-3/'>Entry 3: Taking Medications</a></td> <td><a href='https://ods.od.nih.gov'>National Institutes of Health</a></td> <td><a href='https://ods.od.nih.gov/factsheets/VitaminD-HealthProfessional/'>Vitamin D</a></td> </tr> <tr> <td> </td> <td><a href='https://treasureoftheeast.com'>Tianjiang Pharmaceutical</a></td> <td><a href='https://treasureoftheeast.com/products/xiao-yao-wan-free-and-easy-wanderer'>Xiao Yao Wan - 消遥丸 - Free & Esay Wanderer</a></td> </tr></table>"
)

document.write(
  "<table> <tr> <td><a href='https://yyyzzx.github.io/harmonic-collection/entry-6/'>Entry 6: Walking as a Transportation</a></td> <td><a href='https://www.medicalnewstoday.com'>Medical News Today</a></td> <td><a href='https://www.medicalnewstoday.com/articles/how-many-steps-should-you-take-a-day'>How many steps should people take per day?</a></td> </tr> </table>"
)

document.write(
  "<table> <tr> <td><a href='https://yyyzzx.github.io/harmonic-collection/entry-7/'>Entry 7: Screen Time</a></td> <td><a href='https://pharmeasy.in/blog/'>PharmEasy</a></td> <td><a href='https://pharmeasy.in/blog/phone-time-and-overall-health-whats-the-optimal-screen-time/'>Phone Time And Overall Health - What's The Optimal Screen Time</a></td> </tr> </table>"
)

document.write(
  "<table> <tr> <td><a href='https://yyyzzx.github.io/harmonic-collection/entry-8/'>Entry 8: Keeping Hands Clean</a></td> <td><a href='https://www.cdc.gov'>Centers for Disease Control and Prevention</a></td> <td><a href='https://www.cdc.gov/handwashing/why-handwashing.html'>Handwashing in Communities: Clean Hands Save Lives</a></td> </tr> <tr> <td> </td> <td><a href='https://www.cdc.gov'>Centers for Disease Control and Prevention</a></td> <td><a href='https://www.cdc.gov/hygiene/personal-hygiene/hands.html'>Water, Sanitation, and Environmentally Related Hygiene</a></td> </tr> </table>"
)