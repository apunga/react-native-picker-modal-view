import * as React from 'react';
import { IModalInDtoProps, IModalInDtoState } from '../Interfaces';
export declare class ModalComponent extends React.PureComponent<IModalInDtoProps, IModalInDtoState> {
    private flatListRef;
    private numToRender;
    state: IModalInDtoState;
    static defaultProps: {
        animationType: string;
        hideAlphabetFilter: boolean;
        placeholderTextColor: string;
        autoGenerateAlphabet: boolean;
        sortingLanguage: string;
        removeClippedSubviews: boolean;
        chooseText: string;
        searchText: string;
        autoCorrect: boolean;
        autoSort: boolean;
        list: any[];
        disabled: boolean;
        forceSelect: boolean;
    };
    constructor(props: IModalInDtoProps);
    componentWillUnmount(): void;
    componentWillReceiveProps(nextProps: any, nextState: any): void;
    private clearComponent;
    componentWillMount(): void;
    private openModal;
    render(): JSX.Element;
    private _onViewableItemsChanged;
    private onClose;
    private onBackRequest;
    private scrollToUp;
    private onScrolling;
    private renderItem;
    private generateAlphabet;
    private _keyExtractor;
    private setText;
    private trCompare;
    private compare;
    private getFilteredData;
    private onSelectMethod;
    private getIndex;
    private setAlphabet;
}
