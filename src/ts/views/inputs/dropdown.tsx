import * as React from 'react';
import * as classnames from 'classnames';

class Dropdown extends React.Component<{
  wrapperClassName?: string;
  options: any,
  onOptionSelected: (newOption: string) => void,
  resultRenderer?: (result: string) => any;
}, {
  searchText?: string;
  results?: any[];
  isCollapsed?: boolean
}> {

  constructor(props: any) {
    super(props);
    this.state = {
      searchText: '',
      results: props.options,
      isCollapsed: true
    };
  }

  public onTextUpdate(evt: any) {
    if (!evt) {
      return;
    }

    const searchText = evt.target.value;

    if (!searchText) {
      return this.setState({
        searchText: '',
        results: this.props.options
      });
    }

    const results = this.props.options.filter((option: any) => {
      return option.toLowerCase().includes(searchText.toLowerCase());
    });

    this.setState({
      searchText,
      results,
      isCollapsed: false
    });
  }

  public selectOption(option: string) {
    const { onOptionSelected } = this.props;

    this.setState({ searchText: option, isCollapsed: true });

    if (onOptionSelected) {
      onOptionSelected(option);
    }
  }

  public onFocus() {
    this.setState({ isCollapsed: false });
  }

  public onBlur() {
    this.setState({ isCollapsed: true });
  }

  public renderResults() {
    const { searchText, results, isCollapsed } = this.state;
    const { resultRenderer } = this.props;
    let resultElement;

    if (isCollapsed) {
      return null;
    }

    if (searchText && !results.length) {
      resultElement = <div className="dropdown-result-item">{'No results found!'}</div>;
    }

    else {
      resultElement = results.map((r, i) => {

        /*
         * If the user of this widget passes in a custom render function for
         * results, use that instead.
         */
        if (resultRenderer) {
          return resultRenderer(r);
        }

        return (
          <div
            key={i}
            className={classnames('dropdown-result-item', { 'is-active': r === searchText })}
            onMouseDown={this.selectOption.bind(this, r)}
          >
            {r}
          </div>
        );
      });
    }

    return (
      <div className="dropdown-results-wrapper">
        {resultElement}
      </div>
    );
  }

  public render() {
    const { wrapperClassName } = this.props;
    const { searchText, isCollapsed } = this.state;

    return (
      <div className={classnames('dropdown-wrapper', wrapperClassName)}>
        <input
          className={classnames('dropdown', { 'is-collapsed': isCollapsed })}
          value={searchText}
          placeholder="Dropdown ..."
          onChange={this.onTextUpdate.bind(this)}
          onFocus={this.onFocus.bind(this)}
          onBlur={this.onBlur.bind(this)}
        />
        <div className="dropdown-down-carat">
          <div className="icon-chevron-down">
          </div>
        </div>
        {this.renderResults()}
      </div>
    );
  }
}

export default Dropdown;
