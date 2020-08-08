import React from 'react';
import '../../css/progressbar.css';

class Progressbar extends React.Component {
  render() {
    return (
      <div>

        <div className='a-fixed-left-grid milestone reached'>
          <div className='a-fixed-left-grid-inner'>
            <div className='a-text-left a-fixed-left-grid-col milestone-column a-col-left'>
              <span className='milestone-bar'>
                <span className='milestone-bar_background'/>
                <span className='js-milestone-bar milestone-bar_foreground' style={{overflow: 'hidden', height: '100%'}}/>
              </span>
              <span className='milestone-marker'/>
            </div>

            <div className='a-text-left a-fixed-left-grid-col milestone-column a-col-right'>
              <div className='a-fixed-right-grid'>
                <div className='a-fixed-right-grid-inner' style={{paddingRight: '0px'}}>
                  <div className='column milestone-content'>
                    <span className='milestone-primaryMessage beta'>Ordered
                      <span className='nowrap'>Thursday, 6 august</span>
                    </span>
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
                <span className='js-milestone-bar milestone-bar_foreground' style={{overflow: 'hidden', height: '50%'}}/>
              </span>
              <span className='milestone-marker'/>
            </div>

            <div className='a-text-left a-fixed-left-grid-col milestone-column a-col-right'>
              <div className='a-fixed-right-grid'>
                <div className='a-fixed-right-grid-inner' style={{paddingRight: '0px'}}>
                  <div className='column milestone-content'>
                    <div className='a-row'>
                      <span className='milestone-primaryMessage beta'>Ordered
                        <span className='nowrap'>Thursday, 6 august</span>
                      </span>
                    </div>
                    <div className='a-row a-spacing-none'>
                      <span className='milestone-explanation'> Order has left the facility it will reach to your doorstem soon</span>
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
                <span className='js-milestone-bar milestone-bar_foreground' style={{overflow: 'hidden', height: '0%'}}/>
              </span>
              <span className='milestone-marker'/>
            </div>

            <div className='a-text-left a-fixed-left-grid-col milestone-column a-col-right'>
              <div className='a-fixed-right-grid'>
                <div className='a-fixed-right-grid-inner' style={{paddingRight: '0px'}}>
                  <div className='column milestone-content'>
                    <div className='a-row'>
                      <span className='milestone-primaryMessage beta'>Ordered
                        <span className='nowrap'>Thursday, 6 august</span>
                      </span>
                    </div>
                    <div className='a-row a-spacing-none'>
                      <span className='milestone-explanation'> Order has left the facility it will reach to your doorstem soon</span>
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
                <span className='js-milestone-bar milestone-bar_foreground' style={{overflow: 'hidden', height: '0%'}}/>
              </span>
              <span className='milestone-marker'/>
            </div>

            <div className='a-text-left a-fixed-left-grid-col milestone-column a-col-right'>
              <div className='a-fixed-right-grid'>
                <div className='a-fixed-right-grid-inner' style={{paddingRight: '0px'}}>
                  <div className='column milestone-content'>
                    <div className='a-row'>
                      <span className='milestone-primaryMessage beta'>Ordered
                        <span className='nowrap'>Thursday, 6 august</span>
                      </span>
                    </div>
                    <div className='a-row a-spacing-none'>
                      <span className='milestone-explanation'> Order has left the facility it will reach to your doorstem soon</span>
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

export default Progressbar;