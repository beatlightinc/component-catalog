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
  numberInputValue?: number,
  currentTab?: number
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
      numberInputValue: 0,
      currentTab: 0
    };
  }

  public changeContentTab(tabName: string) {
    this.setState({
      currentTab: tabName
    });
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

  public renderHeaderTabs() {
    const { currentTab } = this.state;
    const tabNames = ['inputs', 'buttons'];
    return (
      <ProgressTabs tabNames={tabNames} currentTab={currentTab} tabOnClick={this.changeContentTab.bind(this)} />
    );
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

        <ComponentSection title={'Pagination'}>
          <Pagination activePage={8} totalPages={12} onClick={() => {}}/>
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

        <ComponentSection title={'Audio Player'}>
          {/* <AudioPlayer
            audioURL={'http://files.platform.test/audio/1/1c31d054ed9c7420.mp3'}
            playing={this.state.audioPlaying}
            pos={this.state.audioPos}
            handlePosChange={this.onAudioPositionChange.bind(this)}
          /> */}
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
