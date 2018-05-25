import * as React from 'react';
import { Button, CircleButton, ButtonGroup } from '../../src/ts/index';

class ButtonsView extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="viewer-app-section">
        <h2 className="+push-double-bottom">{'Buttons'}</h2>

        <div className="+display-flex +push-bottom">
          <div className="+flex-column +push-right">
            <h3 className="+push-bottom +black-text +font-weight-bold">{'Standard'}</h3>

            <h4 className="+push-bottom +grey-text +font-weight-bold">{'Default'}</h4>
            <div className="+display-flex +push-bottom">
              <Button disabled={false} className="+push-half-right">{'Click'}</Button>
              <Button color="grey" disabled={false} className="+push-half-right">{'Click'}</Button>
              <Button color="white" disabled={false} className="+push-half-right">{'Click'}</Button>
            </div>

            <h4 className="+push-bottom +grey-text +font-weight-bold">{'Medium'}</h4>
            <div className="+display-flex +push-bottom">
              <Button size="medium" disabled={false} className="+push-half-right">{'Click'}</Button>
              <Button size="medium" color="grey" disabled={false} className="+push-half-right">{'Click'}</Button>
              <Button size="medium" color="white" disabled={false} className="+push-half-right">{'Click'}</Button>
            </div>

            <h4 className="+push-bottom +grey-text +font-weight-bold">{'Default with Icon'}</h4>
            <div className="+display-flex +push-bottom">
              <Button disabled={false} className="+push-half-right">
                <span className="+push-quarter-right">{'Click'}</span>
                <span className="icon-arrow-down" />
              </Button>
              <Button color="grey" disabled={false} className="+push-half-right">
                <span className="+push-quarter-right">{'Click'}</span>
                <span className="icon-arrow-down" />
              </Button>
              <Button color="white" disabled={false} className="+push-half-right">
                <span className="+push-quarter-right">{'Click'}</span>
                <span className="icon-arrow-down" />
              </Button>
            </div>

            <h4 className="+push-bottom +grey-text +font-weight-bold">{'Icon'}</h4>
            <div className="+display-flex +push-bottom">
              <Button disabled={false} className="+push-half-right">
                <span className="icon-paperclip" />
              </Button>
              <Button color="grey" disabled={false} className="+push-half-right">
                <span className="icon-paperclip" />
              </Button>
              <Button color="white" disabled={false} className="+push-half-right">
                <span className="icon-paperclip" />
              </Button>
            </div>
          </div>

          <div className="+flex-column +push-bottom">
            <h3 className="+push-bottom +black-text +font-weight-bold">{'States'}</h3>
            <h4 className="+push-bottom +grey-text +font-weight-bold">{'Default'}</h4>
            <div className="+display-flex +push-bottom">
              <Button className="+push-half-right">{'Click'}</Button>
              <Button color="grey" className="+push-half-right">{'Click'}</Button>
              <Button color="white" className="+push-half-right">{'Click'}</Button>
              <Button color="red">{'Click'}</Button>
            </div>
            <h4 className="+push-bottom +grey-text +font-weight-bold">{'Disabled'}</h4>
            <div className="+display-flex +push-bottom">
              <Button disabled={true} className="+push-half-right">{'Click'}</Button>
              <Button disabled={true} color="grey" className="+push-half-right">{'Click'}</Button>
              <Button disabled={true} color="white" className="+push-half-right">{'Click'}</Button>
              <Button disabled={true} color="red">{'Click'}</Button>
            </div>
          </div>
        </div>

        <div className="+flex-column +push-bottom">
          <h3 className="+push-bottom +black-text +font-weight-bold">{'Round'}</h3>
          <h4 className="+push-bottom +grey-text +font-weight-bold">{'Default'}</h4>
          <div className="+display-flex +push-bottom">
            <CircleButton className={'+push-right'}>
              <div className="icon-upload-cloud" />
            </CircleButton>
            <CircleButton className={'grey +push-right'}>
              <div className="icon-upload-cloud" />
            </CircleButton>
            <CircleButton className={'white +push-right'}>
              <div className="icon-upload-cloud" />
            </CircleButton>
            <CircleButton className={'red +push-right'}>
              <div className="icon-upload-cloud" />
            </CircleButton>
          </div>

          <h4 className="+push-bottom +grey-text +font-weight-bold">{'Small'}</h4>
          <div className="+display-flex +push-bottom">
            <CircleButton className={'small +push-right'}>
              <div className="icon-upload-cloud" />
            </CircleButton>
            <CircleButton className={'grey small +push-right'}>
              <div className="icon-upload-cloud" />
            </CircleButton>
            <CircleButton className={'white small +push-right'}>
              <div className="icon-upload-cloud" />
            </CircleButton>
            <CircleButton className={'red small +push-right'}>
              <div className="icon-upload-cloud" />
            </CircleButton>
          </div>

          <h4 className="+push-bottom +grey-text +font-weight-bold">{'Large'}</h4>
          <div className="+display-flex +push-bottom">
            <CircleButton className={'large +push-right'}>
              <div className="icon-upload-cloud" />
            </CircleButton>
            <CircleButton className={'grey large +push-right'}>
              <div className="icon-upload-cloud" />
            </CircleButton>
            <CircleButton className={'white large +push-right'}>
              <div className="icon-upload-cloud" />
            </CircleButton>
            <CircleButton className={'red large +push-right'}>
              <div className="icon-upload-cloud" />
            </CircleButton>
          </div>
        </div>

        <div className="+display-flex +push-bottom">
          <div className="+flex-column +push-bottom +push-right">
            <h3 className="+push-bottom +black-text +font-weight-bold">{'Button Groups'}</h3>
            <h4 className="+push-bottom +grey-text +font-weight-bold">{'Default with Icons'}</h4>
            <ButtonGroup>
              <Button color="white" disabled={false}>
                <span className="+push-quarter-right">{'Click'}</span>
                <span className="icon-paperclip" />
              </Button>
              <Button color="white" disabled={false}>
                <span className="+push-quarter-right">{'Click2'}</span>
                <span className="icon-paperclip" />
              </Button>
              <Button color="white" disabled={false}>
                <span className="+push-quarter-right">{'Click3'}</span>
                <span className="icon-paperclip" />
              </Button>
              <Button color="white" disabled={false}>
                <span className="+push-quarter-right">{'Click4'}</span>
                <span className="icon-paperclip" />
              </Button>
            </ButtonGroup>
            <h4 className="+push-bottom +grey-text +font-weight-bold">{'Icon'}</h4>
            <ButtonGroup>
              <Button color="white" disabled={false}><span className="icon-paperclip" /></Button>
              <Button color="white" disabled={false}><span className="icon-paperclip" /></Button>
              <Button color="white" disabled={false}><span className="icon-paperclip" /></Button>
              <Button color="white" disabled={false}><span className="icon-paperclip" /></Button>
            </ButtonGroup>
          </div>
          <div className="+flex-column">
            <h3 className="+push-bottom +black-text +font-weight-bold">{'Minimal'}</h3>
            <h4 className="+push-bottom +grey-text +font-weight-bold">{'Default'}</h4>
            <ButtonGroup>
              <Button color="minimal" disabled={false}>{'Click'}</Button>
              <Button color="minimal" disabled={false}>{'Click2'}</Button>
              <Button color="minimal" disabled={false}>{'Click3'}</Button>
              <Button color="minimal" disabled={false}>{'Click4'}</Button>
            </ButtonGroup>
            <h4 className="+push-bottom +grey-text +font-weight-bold">{'Default with Icon'}</h4>
            <ButtonGroup>
              <Button color="minimal" disabled={false}>
                <span className="+push-quarter-right">{'Click'}</span>
                <span className="icon-paperclip" />
              </Button>
              <Button color="minimal" disabled={false}>
                <span className="+push-quarter-right">{'Click2'}</span>
                <span className="icon-paperclip" />
              </Button>
              <Button color="minimal" disabled={false}>
                <span className="+push-quarter-right">{'Click3'}</span>
                <span className="icon-paperclip" />
              </Button>
              <Button color="minimal" disabled={false}>
                <span className="+push-quarter-right">{'Click4'}</span>
                <span className="icon-paperclip" />
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </div>
    );
  }
}

export default ButtonsView;
