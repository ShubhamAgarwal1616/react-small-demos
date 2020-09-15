import React from 'react';
import '../../css/progressbar.css';
import ReactToPdf from 'react-to-pdf';
import Grid from "../grid/grid";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


class Progressbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='progressbar' ref={this.props.refer} id={'divToPrint'}>

        <div className='a-fixed-left-grid milestone reached'>
          <div className='a-fixed-left-grid-inner'>
            <div className='a-text-left a-fixed-left-grid-col milestone-column a-col-left'>
              <span className='milestone-bar'>
                <span className='milestone-bar_background'/>
                <span className='js-milestone-bar milestone-bar_foreground'
                      style={{overflow: 'hidden', width: '100%'}}/>
              </span>
              <span className='milestone-marker'/>
            </div>

            <div className='a-text-left a-fixed-left-grid-col milestone-column a-col-right'>
              <div className='a-fixed-right-grid'>
                <div className='a-fixed-right-grid-inner' style={{paddingRight: '0px'}}>
                  <div className='column milestone-content'>
                    <div className='a-row'>
                      <span className='milestone-primaryMessage beta'>Ordered
                        <span className='nowrap'>Thursday</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className='a-fixed-left-grid milestone reached'>
          <div className='a-fixed-left-grid-inner'>
            <div className='a-text-left a-fixed-left-grid-col milestone-column a-col-left'>
              <span className='milestone-bar'>
                <span className='milestone-bar_background'/>
                <span className='js-milestone-bar milestone-bar_foreground' style={{overflow: 'hidden', width: '50%'}}/>
              </span>
              <span className='milestone-marker'/>
            </div>

            <div className='a-text-left a-fixed-left-grid-col milestone-column a-col-right'>
              <div className='a-fixed-right-grid'>
                <div className='a-fixed-right-grid-inner' style={{paddingRight: '0px'}}>
                  <div className='column milestone-content'>
                    <div className='a-row'>
                      <span className='milestone-primaryMessage beta'>Ordered
                        <span className='nowrap'>Thursday</span>
                      </span>
                    </div>
                    <div className='a-row a-spacing-none'>
                      <span className='milestone-explanation'> Order has left</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className='a-fixed-left-grid milestone notReached'>
          <div className='a-fixed-left-grid-inner'>
            <div className='a-text-left a-fixed-left-grid-col milestone-column a-col-left'>
              <span className='milestone-bar'>
                <span className='milestone-bar_background'/>
                <span className='js-milestone-bar milestone-bar_foreground' style={{overflow: 'hidden', width: '0%'}}/>
              </span>
              <span className='milestone-marker'/>
            </div>

            <div className='a-text-left a-fixed-left-grid-col milestone-column a-col-right'>
              <div className='a-fixed-right-grid'>
                <div className='a-fixed-right-grid-inner' style={{paddingRight: '0px'}}>
                  <div className='column milestone-content'>
                    <div className='a-row'>
                      <span className='milestone-primaryMessage beta'>Ordered
                        <span className='nowrap'>Thursday</span>
                      </span>
                    </div>
                    <div className='a-row a-spacing-none'>
                      <span className='milestone-explanation'> Order has left</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className='a-fixed-left-grid milestone notReached last-milestone'>
          <div className='a-fixed-left-grid-inner'>
            <div className='a-text-left a-fixed-left-grid-col milestone-column a-col-left'>
              <span className='milestone-bar'>
                <span className='milestone-bar_background'/>
                <span className='js-milestone-bar milestone-bar_foreground' style={{overflow: 'hidden', width: '0%'}}/>
              </span>
              <span className='milestone-marker'/>
            </div>

            <div className='a-text-left a-fixed-left-grid-col milestone-column a-col-right'>
              <div className='a-fixed-right-grid'>
                <div className='a-fixed-right-grid-inner' style={{paddingRight: '0px'}}>
                  <div className='column milestone-content'>
                    <div className='a-row'>
                      <span className='milestone-primaryMessage beta'>Ordered
                        <span className='nowrap'>Thursday</span>
                      </span>
                    </div>
                    <div className='a-row a-spacing-none'>
                      <span className='milestone-explanation'> still in packaging</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

class ReactPdf extends React.Component {

  constructor(props) {
    super(props);
    this.refer = React.createRef();
  }

  makePDF = () => {
    const input = document.getElementById('divToPrint');
    // let options = {
    //   pagesplit: true //include this in your code
    // };
    let pdf = new jsPDF('p', 'pt', 'a1', true);
    pdf.html(input, { callback: function() {
      pdf.save('Menu.pdf');
    }});
  }

  printDocument = () => {
    const input = document.getElementById('divToPrint');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('l', 'px', 'a0', true);
        pdf.addImage(imgData, 'JPEG', 0, 0);
        pdf.addPage('a0', 'l')
        pdf.addImage(imgData, 'JPEG', 0, 0);
        // pdf.output('dataurlnewwindow');
        pdf.save("download.pdf");
      })
    ;
  }

  render() {
    const options = {
      orientation: 'l',
      unit: 'px',
      format: 'dl',
      putOnlyUsedFonts: true,
      compress: false,
      pageSplit: true,
    };
    return(
      <div>
        <div>
          <button onClick={this.makePDF}>Print</button>
        </div>
        <Progressbar refer={this.refer}/>
      </div>
    )
  }
}

export default ReactPdf;