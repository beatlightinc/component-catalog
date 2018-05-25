import * as React from 'react';
import ComponentSection from './component-section';
import ButtonsView from './sections/buttons-viewer';
import FormsView from './sections/forms-viewer';

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

  public renderHeaderTabs() {
    const { tabStep } = this.state;
    const tabNames = ['inputs', 'buttons'];
    return (
      <ProgressTabs tabNames={tabNames} currentTab={tabStep} tabOnClick={this.onTabClick.bind(this)} />
    );
  }

  public renderButtonsView() {
    return (
      <div>
        <ButtonsView />
      </div>
    );
  }

  public renderFormsView() {
    return (
      <div>
        <FormsView />
      </div>
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

    const testImageStyle = {
      border: '2px solid red'
    };

    let mainContent;
    if (tabStep === 0) {
      mainContent = this.renderFormsView();
    }
    else if (tabStep === 1) {
      mainContent = this.renderButtonsView();
    }

    return (
      <div style={wrapperStyle}>

        <ComponentSection title={'Tabs'}>
          {this.renderHeaderTabs()}
        </ComponentSection>

        {mainContent}
      </div>
    );
  }
}

export default Root;
