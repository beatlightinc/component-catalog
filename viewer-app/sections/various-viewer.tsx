import * as React from 'react';
import svgString from './test-svg';
import {
  AudioPlayer,
  ProgressDots,
  ProgressTabs,
  Pagination,
  Pill,
  UserPill,
  Slider,
  BreadCrumbs,
  Toast
} from '../../src/ts/index';

class VariousView extends React.Component<{}, {
  currentStep?: number,
  currentPage?: number,
  breadcrumbPath?: string[],
  unchangingPath?: string[],
  currentTab?: number,
  sliderValue?: number,
  audioPlaying?: boolean,
  audioPos?: number
}> {

  constructor(props: any) {
    super(props);
    this.state = {
      currentStep: 3,
      currentPage: 6,
      breadcrumbPath: ['Level 1', 'Level 2', 'Level 3', 'Level 4'],
      unchangingPath: ['Level 1', 'Level 2', 'Level 3', 'Level 4'],
      currentTab: 0,
      sliderValue: 2,
      audioPlaying: true,
      audioPos: 0
    };
  }

  public onAudioPositionChange(audioPos: number) {
    this.setState({ audioPos });
  }

  public onDotClick(i: number) {
    this.setState({
      currentStep: i
    });
  }

  public onPageClick(i: number) {
    this.setState({
      currentPage: i
    });
  }

  public onBreadcrumbClick(i: number) {
    const { breadcrumbPath } = this.state;
    this.setState({
      breadcrumbPath: breadcrumbPath.slice(0, i + 1)
    });
  }

  public onTabClick(tabIndex: number) {
    this.setState({
      currentTab: tabIndex
    });
  }

  public onChangeSlider(i: number) {
    this.setState({
      sliderValue: i
    });
  }

  public render() {

    const {
      currentStep,
      currentPage,
      breadcrumbPath,
      unchangingPath,
      currentTab,
      sliderValue,
      audioPos,
      audioPlaying
    } = this.state;

    const tabNames = ['Tab One', 'Tab Two', 'Tab Three', 'Tab Four'];

    return (
      <div className="viewer-app-section">
        <h2 className="+push-double-bottom">{'Various'}</h2>

        <AudioPlayer
          audioURL={'files.platform.test/2/1d381ae9b3b89698.mp3'}
          waveformSvg={}
          playing={audioPlaying}
          pos={audioPos}
          handlePosChange={this.onAudioPositionChange.bind(this)}
        />

        <div>
          <div className="+display-flex +push-double-bottom">
            <div className="+flex-column +push-double-right">
              <h3 className="+push-double-bottom">{'Navigation'}</h3>
              <div className="+flex-column +push-bottom">
                <h4 className="+grey-text +push-bottom">{'Steps'}</h4>
                <ProgressDots totalSteps={5} currentStep={2} />
              </div>
              <div className="+flex-column +push-bottom">
                <h4 className="+grey-text +push-bottom">{'Pagination'}</h4>
                <Pagination activePage={6} totalPages={12} onClick={() => {}}/>
              </div>
              <div className="+flex-column +push-bottom">
                <h4 className="+grey-text +push-bottom">{'Breadcrumbs'}</h4>
                <BreadCrumbs path={unchangingPath} />
              </div>
              <div className="+flex-column +push-bottom">
                <h4 className="+grey-text +push-bottom">{'Tabs'}</h4>
                <ProgressTabs tabNames={tabNames} />
              </div>
            </div>

            <div className="+flex-column +push-bottom">
              <h3 className="+push-double-bottom">{'States'}</h3>
              <div className="+display-flex">
                <div className="+flex-column +push-bottom +push-double-right">
                  <h4 className="+grey-text +push-bottom">{'Default'}</h4>
                  <ProgressDots totalSteps={5} />
                </div>
                <div className="+flex-column +push-bottom">
                  <h4 className="+grey-text +push-bottom">{'Active (Clickable)'}</h4>
                  <ProgressDots totalSteps={5} currentStep={currentStep} stepOnClick={this.onDotClick.bind(this)}/>
                </div>
              </div>
              <div className="+display-flex">
                <div className="+flex-column +push-bottom +push-double-right">
                  <h4 className="+grey-text +push-bottom">{'Default'}</h4>
                  <Pagination activePage={6} totalPages={12} onClick={() => {}}/>
                </div>
                <div className="+flex-column +push-bottom">
                  <h4 className="+grey-text +push-bottom">{'Active (Clickable)'}</h4>
                  <Pagination activePage={currentPage} totalPages={12} onClick={this.onPageClick.bind(this)}/>
                </div>
              </div>
              <div className="+display-flex">
                <div className="+flex-column +push-bottom +push-double-right">
                  <h4 className="+grey-text +push-bottom">{'Default'}</h4>
                  <BreadCrumbs path={unchangingPath} />
                </div>
                <div className="+flex-column +push-bottom">
                  <h4 className="+grey-text +push-bottom">{'Active (Clickable)'}</h4>
                  <BreadCrumbs path={breadcrumbPath} onClick={this.onBreadcrumbClick.bind(this)}/>
                </div>
              </div>
              <div className="+display-flex">
                <div className="+flex-column +push-bottom +push-double-right">
                  <h4 className="+grey-text +push-bottom">{'Default'}</h4>
                  <ProgressTabs tabNames={tabNames} currentTab={2} />
                </div>
                <div className="+flex-column +push-bottom">
                  <h4 className="+grey-text +push-bottom">{'Active (Clickable)'}</h4>
                  <ProgressTabs tabNames={tabNames} currentTab={currentTab} tabOnClick={this.onTabClick.bind(this)} />
                </div>
              </div>
            </div>
          </div>

          <div className="+display-flex +push-double-bottom">
            <div className="+flex-column +push-double-right">
              <h3 className="+push-double-bottom">{'Controls'}</h3>
              <div className="+flex-column">
                <h4 className="+grey-text +push-bottom">{'Slider'}</h4>
                <Slider
                  min={0}
                  max={100}
                  disabled={false}
                  value={40}
                  onChange={() => {}}
                />
              </div>
            </div>
            <div className="+flex-column">
              <h3 className="+push-double-bottom">{'States'}</h3>
              <div className="+display-flex">
                <div className="+flex-column +push-double-right +push-double-bottom">
                  <h4 className="+grey-text +push-bottom">{'Default'}</h4>
                  <Slider
                    min={0}
                    max={100}
                    disabled={false}
                    value={80}
                    onChange={() => {}}
                  />
                </div>
                <div className="+flex-column +push-double-right +push-double-bottom">
                  <h4 className="+grey-text +push-bottom">{'Active (Clickable)'}</h4>
                  <Slider
                    min={0}
                    max={100}
                    disabled={false}
                    value={sliderValue}
                    onChange={this.onChangeSlider.bind(this)}
                  />
                </div>
                <div className="+flex-column +push-double-bottom">
                  <h4 className="+grey-text +push-bottom">{'Disabled'}</h4>
                  <Slider
                    min={0}
                    max={100}
                    disabled={true}
                    value={0}
                    onChange={() => {}}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="+display-flex">
            <div className="+flex-column +push-double-right">
              <h3 className="+push-double-bottom">{'Pills'}</h3>
              <div className="+flex-column +push-bottom">
                <h4 className="+grey-text +push-bottom">{'Tags'}</h4>
                <Pill removeable={false} active={false} type={'blue'} title={'Test Pill'} />
              </div>
              <div className="+flex-column">
                <h4 className="+grey-text +push-bottom">{'User-Pill'}</h4>
                <UserPill
                  removeable={false}
                  type={'blue'}
                  userName={'KevinB'}
                  imgSrc="http://via.placeholder.com/150x150"
                />
              </div>
            </div>

            <div className="+flex-column">
              <h3 className="+push-double-bottom">{'States'}</h3>
              <div className="+flex-column +push-bottom">
                <h4 className="+grey-text +push-bottom">{'Default'}</h4>
                <div className="+display-flex">
                  <Pill removeable={false} active={false} type={'blue'} title={'Test Pill'} className="+push-right" />
                  <div>
                    <UserPill
                      removeable={false}
                      type={'blue'}
                      userName={'KevinB'}
                      imgSrc="http://via.placeholder.com/150x150"
                    />
                  </div>
                </div>
              </div>

              <div className="+flex-column +push-bottom">
                <h4 className="+grey-text +push-bottom">{'Removeable'}</h4>
                <div className="+display-flex">
                  <Pill removeable={true} active={false} type={'blue'} title={'Test Pill'} className="+push-right" />
                  <div>
                    <UserPill
                      removeable={true}
                      type={'blue'}
                      userName={'KevinB'}
                      imgSrc="http://via.placeholder.com/150x150"
                    />
                  </div>
                </div>
              </div>

              <div className="+flex-column +push-bottom">
                <h4 className="+grey-text +push-bottom">{'Active'}</h4>
                <div className="+display-flex">
                  <Pill removeable={false} active={true} type={'blue'} title={'Test Pill'} className="+push-right" />
                  <div>
                    <UserPill
                      active={true}
                      removeable={false}
                      type={'blue'}
                      userName={'KevinB'}
                      imgSrc="http://via.placeholder.com/150x150"
                    />
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

export default VariousView;
