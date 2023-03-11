import React from 'react'
import './css/WidgetContent.css';
function WidgetContent() {
  return (
    <div className="widget__contents overthrow nano-content description1">
      <marquee direction="up" scrolldelay="20" onmouseover="this.stop()" onmouseout="this.start()">
                               <div class="anounce-apnel">
                                                 <a href="https://www.aicte-india.org/feedback/" target="_blank">
                                                     <h2>Student/Faculty Feedback Facility in AICTE Web Portal</h2>
                                                 </a>
                                             </div>
                            
                             <div class="anounce-apnel">
                                                 <a href="https://www.studentservicesbureau.com/" target="_blank">
                                                     <h2>Ex-Student Verification Services</h2>
                                                 </a>
                                             </div>
                             
                             
                                                                 <div class="anounce-apnel">
                                                 <a href="https://www.kiet.edu/happenings/announcements">
                                                     <h2>Electrical and Computer Engineering Department: Connect with eminent professor Dr. Jon M Jenkins, NASA Ames Research Center during DLS from 22 to 25 March 2023</h2>
                                                 </a>
                                             </div>
                                                             
                             
                                                               
                               <div class="anounce-apnel">
                                                 <a href="https://www.kiet.edu/mandatory-disclosure" target="_blank">
                                                     <h2>Mandatory Disclosure</h2>
                                                 </a>
                                             </div>
                                         </marquee>
    </div>
  );
}

export default WidgetContent