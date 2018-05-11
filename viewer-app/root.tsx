import * as React from 'react';
import ComponentSection from './component-section';

import {
  Pagination,
  Input,
  FileButton,
  Button,
  AudioPlayer,
  Textarea,
  ProgressDots,
  ProgressTabs,
  ToggleSwitch,
  RadioButton,
  Checkbox,
  Pill,
  UserPill,
  Modal,
  Slider,
  BreadCrumbs,
  Image,
  CircleButton,
  ButtonGroup,
  Avatar,
  NumberInput
} from '../src/ts/index';

class Root extends React.Component<{}, {
  audioPlaying?: boolean
  audioPos?: number,
  inputValue?: string,
  roundInputValue?: string,
  textareaValue?: string,
  currentStep?: number,
  tabStep?: number,
  toggleValue?: boolean,
  activeRadioButtonID?: string,
  checkboxValue?: boolean,
  sliderValue: number,
  breadCrumbPath: string[],
  modalShowing?: boolean
  numberInputValue?: number
}> {

  constructor(props: any) {
    super(props);
    this.state = {
      audioPlaying: true,
      audioPos: 0,
      inputValue: '',
      roundInputValue: '',
      textareaValue: '',
      currentStep: 0,
      tabStep: 0,
      toggleValue: false,
      activeRadioButtonID: 'One',
      sliderValue: 2,
      breadCrumbPath: ['Level 1', 'Level 2', 'Level 3'],
      modalShowing: false,
      numberInputValue: 0
    };
  }

  public toggleCheckbox() {
    const { checkboxValue } = this.state;
    this.setState({ checkboxValue: !checkboxValue });
  }

  public toggleSwitch() {
    const { toggleValue } = this.state;
    this.setState({ toggleValue: !toggleValue });
  }

  public onAudioPositionChange(audioPos: number) {
    this.setState({ audioPos });
  }

  public onInputChange(e: React.FormEvent<HTMLInputElement>) {
    this.setState({ inputValue: e.currentTarget.value });
  }

  public onRoundInputChange(e: React.FormEvent<HTMLInputElement>) {
    this.setState({ roundInputValue: e.currentTarget.value });
  }

  public onTextareaChange(e: React.FormEvent<HTMLTextAreaElement>) {
    this.setState({ textareaValue: e.currentTarget.value });
  }

  public onStepClick(i: number) {
    this.setState({ currentStep: i });
  }

  public onTabClick(i: number) {
    this.setState({ tabStep: i });
  }

  public radioOnClick(key: string) {
    key === this.state.activeRadioButtonID
    ? this.setState({ activeRadioButtonID: null })
    : this.setState({ activeRadioButtonID: key });
  }

  public closeModal() {
    this.setState({ modalShowing: false });
  }

  public showModal() {
    this.setState({ modalShowing: true });
  }

  public handleSliderChange(newValue: number) {
    this.setState({ sliderValue: newValue });
  }

  public handleBreadCrumbClick(clickedCrumbIndex: number) {
    const oldBreadCrumbPath = this.state.breadCrumbPath;
    const newBreadCrumbPath = oldBreadCrumbPath.slice(0, clickedCrumbIndex + 1);
    this.setState({ breadCrumbPath: newBreadCrumbPath });
  }

  public numberInputHandleChange(newValue: number) {
    this.setState({ numberInputValue: newValue });
  }

  public render() {
    const wrapperStyle = {
      padding: '15px',
      backgroundColor: '#F7F7F8'
    };

    const {
      textareaValue,
      tabStep,
      currentStep,
      toggleValue,
      activeRadioButtonID,
      checkboxValue,
      numberInputValue,
      modalShowing
    } = this.state;

    const tabNames = ['tab 1', 'this is getting out of hand', 'tab 3', 'tab 4'];

    const testImageStyle = {
      border: '2px solid red'
    };

    return (
      <div style={wrapperStyle}>

        <ComponentSection title={'Button Group'}>
          <ButtonGroup>
            <Button color="white" disabled={false}>{'Click'}</Button>
            <Button color="white" disabled={false}>{'Click2'}</Button>
            <Button color="white" disabled={false}>{'Click3'}</Button>
            <Button color="white" disabled={false}>{'Click4'}</Button>
          </ButtonGroup>
        </ComponentSection>

        <ComponentSection title={'Pagination'}>
          <Pagination activePage={8} totalPages={12} onClick={() => {}}/>
        </ComponentSection>

        <ComponentSection title={'Inputs'} className="+flex-column">
          <NumberInput
            placeholder="0"
            value={numberInputValue}
            handleChange={this.numberInputHandleChange.bind(this)}
            max={15}
            min={0}
          />

          <Input placeholder="I'm default"
            patternString="\b[A-z]{1,2}\b"
            value={this.state.inputValue}
            onHandleChange={this.onInputChange.bind(this)} />

          <Input onHandleChange={this.onRoundInputChange.bind(this)}
            patternString="\b[A-z]{1,3}\b"
            placeholder="I'm round"
            value={this.state.roundInputValue}
            round={true}/>

          <Input
            onHandleChange={this.onRoundInputChange.bind(this)}
            patternString="\b[A-z]{1,3}\b"
            placeholder="I've got an icon"
            value={this.state.roundInputValue}
            iconType="icon-search"
          />

          <Input
            onHandleChange={this.onRoundInputChange.bind(this)}
            patternString="\b[A-z]{1,3}\b"
            placeholder="Enter your password..."
            value={this.state.roundInputValue}
            iconType="icon-lock"
          />

            <Input placeholder="I'm disabled" disabled round={true} onHandleChange={() => {}}/>
        </ComponentSection>

        <ComponentSection title={'Text Areas'}>
          <Textarea value={textareaValue} placeholder="Disabled" onHandleChange={this.onTextareaChange.bind(this)} />
        </ComponentSection>

        <ComponentSection title={'Radio Buttons'}>
          <RadioButton key={1} onClick={this.radioOnClick.bind(this, 'One')}
            activeLabel={activeRadioButtonID}
            label="One"/>
          <RadioButton key={2} onClick={this.radioOnClick.bind(this, 'Two')}
            activeLabel={activeRadioButtonID}
            label="Two" disabled />
          <RadioButton key={3} onClick={this.radioOnClick.bind(this, 'Three')}
            activeLabel={activeRadioButtonID}
            label="Three" />
        </ComponentSection>

        <ComponentSection title={'Progress Dots'}>
          <ProgressDots totalSteps={5} currentStep={currentStep} stepOnClick={this.onStepClick.bind(this)} />
        </ComponentSection>

        <ComponentSection title={'Tabs'}>
          <ProgressTabs tabNames={tabNames} currentTab={tabStep} tabOnClick={this.onTabClick.bind(this)} />
        </ComponentSection>

        <ComponentSection title={'Modals'}>
          <Button color="grey" disabled={false} onClick={this.showModal.bind(this)}>
            {'Show modal'}
          </Button>

          <Modal showing={modalShowing} onClose={this.closeModal.bind(this)}>
            <div>{'im in a modal'}</div>
          </Modal>
        </ComponentSection>

        <ComponentSection title={'Buttons'}>
          <Button color="white" disabled={false}>
            {'Click'}
            <span className="icon-arrow-down" />
          </Button>
          <br/>
          <Button disabled={false}>
            <span className="icon-paperclip" />
          </Button>
          <br/>
          <Button disabled={false}>
            <span className="icon-send" />
          </Button>
          <br/>
          <Button color="red" disabled={false}>{'Click'}</Button>
          <br/>
          <Button color="minimal" disabled={false}>{'Click'}</Button>
          <br/>
          <Button color="grey" disabled={true}>{'Click'}</Button>
          <br/>
          <Button color="white" disabled={true}>{'Click'}</Button>
          <br/>
          <Button disabled={true}>{'Click'}</Button>
          <br/>
          <Button color="red" disabled={true}>{'Click'}</Button>
          <br/>
          <Button color="minimal" disabled={true}>{'Click'}</Button>
          <br/>
          <FileButton onChange={() => { /**/ }}>{'Upload'}</FileButton>

          <div className="+display-flex +middle-align">
            <CircleButton className={'small +push-right'}>
              <div className="icon-upload-cloud" />
            </CircleButton>

            <CircleButton className={'+push-right'}>
              <div className="icon-upload-cloud" />
            </CircleButton>

            <CircleButton className={'large'}>
              <div className="icon-upload-cloud" />
            </CircleButton>
          </div>
        </ComponentSection>

        <ComponentSection title={'Audio Player'}>
          {/* <AudioPlayer
            audioURL={'http://files.platform.test/audio/1/1c31d054ed9c7420.mp3'}
            playing={this.state.audioPlaying}
            pos={this.state.audioPos}
            handlePosChange={this.onAudioPositionChange.bind(this)}
          /> */}
        </ComponentSection>

        <ComponentSection title={'Icons'}>
          <div className="icon-upload-cloud" />
        </ComponentSection>

        <ComponentSection title={'Checkboxes'}>
          <Checkbox
            label="test checkbox"
            onClick={() => {}}
            checked={false}
          />
          <Checkbox
            label="test checkbox active"
            onClick={this.toggleCheckbox.bind(this)}
            checked={checkboxValue}
          />
          <Checkbox
            label="indeterminate test checkbox"
            onClick={() => {}}
            checked={false}
            indeterminate={true}
          />
          <Checkbox
            label="disabled test checkbox"
            onClick={() => {}}
            checked={false}
            disabled={true}
          />
        </ComponentSection>

        <ComponentSection title={'Pills'}>
          <Pill removeable={true} active={false} type={'blue'} title={'Test Pill'} />
          <br/>
          <UserPill removeable={true} type={'blue'} userName={'KevinB'} imgSrc="http://via.placeholder.com/150x150" />
        </ComponentSection>

        <ComponentSection title={'Slider'}>
          <Slider
            min={0}
            max={100}
            disabled={false}
            value={this.state.sliderValue}
            onChange={this.handleSliderChange.bind(this)}
          />

          <h5 style={{ color: 'black' }}>{'Disabled'}</h5>
          <Slider
            min={0}
            max={100}
            disabled={true}
            value={this.state.sliderValue}
            onChange={this.handleSliderChange.bind(this)}
          />
        </ComponentSection>

        <ComponentSection title={'Breadcrumbs'}>
          <BreadCrumbs path={this.state.breadCrumbPath} onClick={this.handleBreadCrumbClick.bind(this)}/>
        </ComponentSection>

        <ComponentSection title={'Images'}>
          <Image url="http://via.placeholder.com/350x150" style={testImageStyle} height={150} width={350}/>
          <Avatar imgSrc="http://via.placeholder.com/150x150" height={40} width={40} circle={true} />
        </ComponentSection>
      </div>
    );
  }
}

export default Root;
