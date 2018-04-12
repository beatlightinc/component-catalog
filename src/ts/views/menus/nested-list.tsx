import * as React from "react";
import * as classnames from "classnames";

const NestedList = (props: {
  listItems: any,
  classname?: string,
  activeCategory: string,

  nameParser?: (name: string) => string,
  splitMethod?: (item: any) => void,
  itemOnClick: (item: any) => void
}) => {
  const {
    listItems,
    classname,
    activeCategory,
    nameParser,
    splitMethod,
    itemOnClick
  } = props;

  function getCountsArray() {
    const { listItems } = this.props;
    let counts: any[] = [];
    listItems.forEach((listItem: any) => {
      let splitItem = listItem.split(".");
      //im mutating this guy so want a copy
      let item = listItem;

      let i;
      for (i = 0; i < splitItem.length; i++) {
        if (item in counts) {
          counts[item] ++;
        }
        else {
          counts[item] = 1;
        }
        item = item.substring(0, item.lastIndexOf("."));
      }
    });
    return counts;
  }

  function renderLevel(prevLevel: string) {
    const { activeCategory, listItems, itemOnClick, nameParser } = this.props;
    const currentDepth = prevLevel.split(".").length;
    const splitActive = activeCategory.split(".");
    const splitPrev = prevLevel.split(".");
    let showing = true;
    let i;

    for (i = 0; i < currentDepth; i++) {
      if (splitActive[i] != splitPrev[i]) {
        showing = false;
      }
    }

    if (!showing) {
      return null;
    }
    else {
      const validCategories = listItems.filter((item: string) => {
        return item.indexOf(`${prevLevel}.`) === 0;
      });
      let options: any = {};
      validCategories.forEach((cat: string) => {
        let splitCat: string[] = cat.split(".");
        if (options[splitCat[currentDepth]]) {
          options[splitCat[currentDepth]]++;
        }
        else {
          options[splitCat[currentDepth]] = 1;
        }
      });
      const wrapperClassName = classnames("tree-level-wrapper", `level-${currentDepth}`);
      return (
        <div className={wrapperClassName}>
          { Object.keys(options).map((option, i) => {
            const optionClassName = classnames("tree-list-option", `level-${currentDepth}`, {"active": option === splitActive[currentDepth]});
            return (
              <div key={i}>
                <div className={optionClassName} onClick={itemOnClick.bind(this, `${prevLevel}.${option}`)}>
                  {nameParser ? `${nameParser(option)} (${options[option]})` : `${option} (${options[option]})`}
                </div>
                { this.renderLevel(`${prevLevel}.${option}`) }
              </div>
            );
          }) }
        </div>
      );
    };
  }

  function renderTopLevel() {
    const { listItems, activeCategory, itemOnClick } = this.props;
    const counts = this.getCountsArray();
    const activeTop = activeCategory.split(".")[0];
    const topOptions = Object.keys(counts).filter((iKey) => {
      return iKey.indexOf(".") < 0;
    });
    const allClassName = classnames("tree-list-option level-0", { "active": activeTop === "" });
    const topComponents = topOptions.map((option, i) => {
      const optionClassName = classnames("tree-list-option level-0", { "active": option === activeTop });
      return (
        <div key={i}>
          <div className={optionClassName} onClick={itemOnClick.bind(this, option)}>
            {`${option} (${counts[option]})`}
          </div>
          {this.renderLevel(option)}
        </div>
      );
    });
  }
  const wrapperClassName = classnames("tree-list-wrapper", classname);
  return (
    <div className={wrapperClassName}>
      { this.renderTopLevel() }
    </div>
  );
}

export default NestedList;
